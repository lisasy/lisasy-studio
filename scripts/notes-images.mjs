import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = process.cwd();
const ORIGINALS_DIR = path.join(ROOT, 'public', 'notes', 'images', 'originals');
const OUT_DIR = path.join(ROOT, 'public', 'notes', 'images');
const MANIFEST_PATH = path.join(ROOT, 'src', 'data', 'notes-images-manifest.json');

const SUPPORTED_EXTS = new Set(['.jpg', '.jpeg', '.png', '.webp']);

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function listImages(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((name) => SUPPORTED_EXTS.has(path.extname(name).toLowerCase()))
    .sort();
}

function toPublicUrl(fileName) {
  return `/notes/images/${fileName}`;
}

async function main() {
  ensureDir(ORIGINALS_DIR);
  ensureDir(OUT_DIR);
  ensureDir(path.dirname(MANIFEST_PATH));

  const originals = listImages(ORIGINALS_DIR);
  if (originals.length === 0) {
    console.log(`[notes:images] No images found in ${path.relative(ROOT, ORIGINALS_DIR)}`);
    console.log(`[notes:images] Put originals there, then re-run: npm run notes:images`);
    process.exit(0);
  }

  const manifest = {
    version: 1,
    generatedAt: new Date().toISOString(),
    images: {},
  };

  for (const fileName of originals) {
    const inPath = path.join(ORIGINALS_DIR, fileName);

    const baseName = path.parse(fileName).name;
    const outFileName = `${baseName}.jpeg`;
    const outPath = path.join(OUT_DIR, outFileName);

    const image = sharp(inPath, { failOn: 'none' });
    const meta = await image.metadata();
    const width = meta.width ?? 0;
    const height = meta.height ?? 0;

    // Normalize to a good-quality JPEG for consistent delivery from /public.
    // - Clamp huge originals to a sane max width (keeps quality + perf).
    // - Avoid upscaling anything (sharp won’t upscale when only using resize with fit:'inside').
    const MAX_W = 2400;
    const pipeline = sharp(inPath, { failOn: 'none' }).rotate().resize({
      width: MAX_W,
      withoutEnlargement: true,
      fit: 'inside',
    });

    await pipeline.jpeg({ quality: 88, mozjpeg: true }).toFile(outPath);

    // Tiny blur placeholder (base64 JPEG)
    const blurBuf = await sharp(inPath, { failOn: 'none' })
      .rotate()
      .resize({ width: 32, withoutEnlargement: true, fit: 'inside' })
      .jpeg({ quality: 50, mozjpeg: true })
      .toBuffer();

    const blurDataURL = `data:image/jpeg;base64,${blurBuf.toString('base64')}`;

    manifest.images[outFileName] = {
      src: toPublicUrl(outFileName),
      width,
      height,
      blurDataURL,
    };
  }

  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + '\n', 'utf8');

  console.log(`[notes:images] Generated ${Object.keys(manifest.images).length} optimized images`);
  console.log(`[notes:images] Wrote manifest ${path.relative(ROOT, MANIFEST_PATH)}`);
}

main().catch((err) => {
  console.error('[notes:images] Failed:', err);
  process.exit(1);
});

