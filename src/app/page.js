import React from 'react';
import Link from 'next/link';

const sections = [
  { name: "Product / Software", href: "/product-design" },
  { name: "Studio Art", href: "/studio-art" },
  { name: "Notes", href: "/notes" },
  { name: "About Me", href: "/about" },
];

const PRODUCT_THUMBS = [
  '/images/product/coinbase.png',
  '/images/product/instagram.png',
  '/images/product/meta.svg',
];

function ProductDesignCardMedia() {
  return (
    <div className="aspect-[4/3] bg-background-secondary flex items-center justify-center gap-3 sm:gap-4 px-4">
      {PRODUCT_THUMBS.map((src) => (
        <img
          key={src}
          src={src}
          alt=""
          className="h-[72px] w-[72px] sm:h-20 sm:w-20 object-contain shrink-0"
        />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <article>
      <div className="text-left text-lg md:text-xl lg:text-2xl leading-[1.33] gap-4 md:gap-7">
        <p>
          Hello, I&apos;m Lisa and I&apos;m a multi-disciplinary product &amp; software designer,
          artist, and illustrator based in Los Angeles, CA. Here is my place on the
          internet where I share my product/software work across 14 years
          working in tech, my studio art practice, and my curious notes about
          design, art, creativity, exploration, and nurturing a well-lived life.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          {sections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="group block rounded-lg bg-background-secondary/50 overflow-hidden transition-colors hover:bg-background-secondary"
            >
              {section.href === '/product-design' ? (
                <ProductDesignCardMedia />
              ) : (
                <div className="aspect-[4/3] bg-background-secondary" />
              )}
              <div className="px-4 py-3">
                <span className="text-base md:text-lg font-normal">{section.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
