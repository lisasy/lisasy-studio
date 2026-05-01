"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import CloudinaryImage from '@/components/CloudinaryImage';
import NotesSidebar from '@/components/NotesSidebar';
import notesImagesManifest from '@/data/notes-images-manifest.json';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function formatDate(dateStr) {
  if (!dateStr) return '';
  const parts = dateStr.split('/');
  if (parts.length === 3) {
    const monthIdx = parseInt(parts[0], 10) - 1;
    const day = parseInt(parts[1], 10);
    const year = parts[2];
    return `${MONTHS[monthIdx]} ${day}, ${year}`;
  }
  return dateStr;
}

function formatDateForDateTime(dateStr) {
  if (!dateStr) return '';
  const parts = dateStr.split('/');
  if (parts.length === 3) {
    const month = parts[0].padStart(2, '0');
    const day = parts[1].padStart(2, '0');
    const year = parts[2];
    return `${year}-${month}-${day}`;
  }
  return dateStr;
}

export default function NotesFeed({ posts }) {
  const [activeId, setActiveId] = useState(posts[0]?.id || '');

  useEffect(() => {
    const feed = document.getElementById('notes-feed');
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { root: feed, rootMargin: '-32px 0px -60% 0px', threshold: 0 }
    );

    posts.forEach((post) => {
      const el = document.getElementById(post.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [posts]);

  return (
    <>
      <NotesSidebar notes={posts} activeId={activeId} onSelect={setActiveId} />

      <div
        id="notes-feed"
        className="flex flex-col h-screen overflow-y-auto p-6 pt-0 md:p-8 md:pt-0 md:ml-[var(--layout-notes-content-ml)]"
      >
        <article className="self-center">
          <div className="max-w-3xl text-left text-lg md:text-xl lg:text-2xl leading-[1.33] gap-4 md:gap-7">
            <div className="space-y-16 md:space-y-20">
              {posts.map((post, i) => (
                <article key={post.id} id={post.id} className="space-y-6 scroll-mt-24">
                  <header className="notes-post-header !mb-0 sticky top-0 z-10 pt-6 pb-6 md:pt-8 md:pb-8 bg-[linear-gradient(to_bottom,var(--color-background)_0%,var(--color-background)_72%,transparent_100%)]">
                    <h3>{post.title}</h3>
                    <time className="text-base text-text-secondary" dateTime={formatDateForDateTime(post.date)}>
                      {formatDate(post.date)}
                    </time>
                  </header>

                  {post.image && (
                    <div className="my-8">
                      <CloudinaryImage
                        publicId={post.image.publicId}
                        alt={post.image.alt}
                        width={post.image.width}
                        height={post.image.height}
                        className="w-full h-auto rounded"
                        usePlaceholder={post.image.publicId === "sample"}
                      />
                    </div>
                  )}

                  <div className="space-y-6">
                    <ReactMarkdown
                      components={{
                        p: ({ node, ...props }) => <p className="smaller" {...props} />,
                        img: ({ node, src, alt, title, ...props }) => {
                          if (!src) return null;

                          const normalizedSrc =
                            src.startsWith('images/')
                              ? `/notes/${src}`
                              : src.startsWith('./images/')
                                ? `/notes/${src.replace('./', '')}`
                                : src;

                          const fileName = normalizedSrc.startsWith('/notes/images/')
                            ? normalizedSrc.replace('/notes/images/', '')
                            : null;

                          const meta = fileName ? notesImagesManifest?.images?.[fileName] : null;

                          if (meta?.width && meta?.height) {
                            return (
                              <figure className="w-full">
                                <div
                                  className="relative w-full overflow-hidden rounded"
                                  style={{ aspectRatio: `${meta.width} / ${meta.height}` }}
                                >
                                  <Image
                                    src={meta.src}
                                    alt={alt || ''}
                                    title={title}
                                    fill
                                    sizes="(min-width: 1024px) 768px, 100vw"
                                    className="object-contain"
                                    placeholder={meta.blurDataURL ? 'blur' : 'empty'}
                                    blurDataURL={meta.blurDataURL}
                                  />
                                </div>
                              </figure>
                            );
                          }

                          // Fallback: still render something even if manifest isn't generated yet.
                          // eslint-disable-next-line @next/next/no-img-element
                          return <img src={normalizedSrc} alt={alt || ''} title={title} className="w-full h-auto rounded" {...props} />;
                        },
                      }}
                    >
                      {post.content}
                    </ReactMarkdown>
                  </div>

                  {i < posts.length - 1 && (
                    <hr className="border-t border-foreground/10 mt-12" />
                  )}
                </article>
              ))}
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
