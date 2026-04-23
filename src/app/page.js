import React from 'react';
import { getAllNotes } from '@/lib/notes';
import HomeCardLink from '@/components/HomeCardLink';

const sections = [
  { name: "Product / Software", href: "/product-design" },
  { name: "Studio Art", href: "/studio-art" },
  { name: "Notes", href: "/notes" },
  { name: "About Me", href: "/about" },
];

function ProductDesignCardMedia() {
  const icons = [
    '/images/home/coinbase.png',
    '/images/home/instagram.png',
    '/images/home/meta.png',
    '/images/home/dropbox.png',
  ];

  return (
    <div className="home-card-media aspect-[4/3] bg-background-secondary flex items-center justify-center">
      <div className="grid grid-cols-2 gap-3 sm:gap-4 p-4 lg:p-6">
        {icons.map((src) => (
          <img
            key={src}
            src={src}
            alt=""
            className="h-14 w-14 lg:h-20 lg:w-20 object-contain"
          />
        ))}
      </div>
    </div>
  );
}

function getFirstParagraphText(markdown = '') {
  const paragraphs = markdown
    .split(/\n\s*\n/g)
    .map((p) => p.trim())
    .filter(Boolean);

  const first = paragraphs.find((p) => !p.startsWith('#')) || '';
  return first
    .replace(/!\[[^\]]*\]\([^)]+\)/g, '') // images
    .replace(/\[[^\]]*\]\([^)]+\)/g, (m) => m.replace(/\[|\]\([^)]+\)/g, '')) // links → text
    .replace(/[`*_>#-]/g, '') // light markdown cleanup
    .replace(/\s+/g, ' ')
    .trim();
}

function NotesCardMedia() {
  const notes = getAllNotes();
  const newest = notes?.[0];
  const preview = getFirstParagraphText(newest?.content || '').slice(0, 320);
  const date = newest?.date || '';

  const formattedDate = (() => {
    if (!date) return '';
    const parts = date.split('/');
    const parsed =
      parts.length === 3
        ? new Date(Number(parts[2]), Number(parts[0]) - 1, Number(parts[1]))
        : new Date(date);
    if (Number.isNaN(parsed.getTime())) return date;
    return parsed.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  })();

  return (
    <div className="home-card-media aspect-[4/3] bg-background-secondary flex items-start p-5 lg:p-8">
      <div className="home-notes-stack flex min-h-0 w-full flex-col">
        {formattedDate ? <div className="home-notes-date">{formattedDate}</div> : null}
        <div className="home-notes-preview text-lg lg:text-2xl">
          <span className="home-blink-cursor" aria-hidden="true" />
          {preview}
        </div>
      </div>
    </div>
  );
}

function StudioArtCardMedia() {
  return (
    <div className="home-card-media aspect-[4/3] bg-background-secondary p-4 lg:p-5 flex items-center justify-center">
      <img
        src="/images/home/studio-art.png"
        alt=""
        className="w-11/12 lg:w-5/6 h-auto object-cover rounded-[12px]"
      />
    </div>
  );
}

function AboutCardMedia() {
  return (
    <div className="home-card-media aspect-[4/3] bg-background-secondary p-4 lg:p-5 flex items-center justify-center">
      <img
        src="/images/home/about.png"
        alt=""
        className="size-32 md:size-44 lg:size-64 object-cover rounded-full"
      />
    </div>
  );
}

export default function Home() {
  return (
    <article>
      <div className="text-left text-lg md:text-xl lg:text-2xl leading-[1.33] gap-4 md:gap-7">
        <h3>
          Hello, I&apos;m Lisa and I&apos;m a multi-disciplinary product &amp; software designer,
          artist, and illustrator based in Los Angeles, CA. Here is my place on the
          internet where I share my product/software work across 14 years
          working in tech, my studio art practice, and my curious notes about
          design, art, creativity, exploration, and nurturing a well-lived life.
        </h3>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-8">
          {sections.map((section) => {
            const tooltip =
              section.href === '/product-design'
                ? 'Product Design'
                : section.href === '/studio-art'
                  ? 'Studio Art'
                  : section.href === '/notes'
                    ? 'Notes'
                    : section.href === '/about'
                      ? 'About'
                      : section.name;

            const cardKind =
              section.href === '/product-design'
                ? 'home-card--product'
                : section.href === '/notes'
                  ? 'home-card--notes'
                  : '';

            return (
              <HomeCardLink
                key={section.href}
                href={section.href}
                tooltip={tooltip}
                className={`home-card group block rounded-2xl overflow-hidden transition-colors bg-background-secondary ${cardKind}`}
              >
                {section.href === '/product-design' ? (
                  <ProductDesignCardMedia />
                ) : section.href === '/studio-art' ? (
                  <StudioArtCardMedia />
                ) : section.href === '/notes' ? (
                  <NotesCardMedia />
                ) : section.href === '/about' ? (
                  <AboutCardMedia />
                ) : (
                  <div className="aspect-[4/3] bg-background-secondary" />
                )}
                {/* <div className="px-4 py-3">
                  <span className="text-base md:text-lg font-normal">{section.name}</span>
                </div> */}
              </HomeCardLink>
            );
          })}
        </div>
      </div>
    </article>
  );
}
