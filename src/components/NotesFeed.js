"use client"

import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import CloudinaryImage from '@/components/CloudinaryImage';
import NotesSidebar from '@/components/NotesSidebar';

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
      <NotesSidebar notes={posts} activeId={activeId} />

      <div id="notes-feed" className="h-screen overflow-y-auto p-6 md:p-8 md:ml-[var(--layout-notes-content-ml)]">
        <article>
          <div className="max-w-3xl text-left text-lg md:text-xl lg:text-2xl leading-[1.33] gap-4 md:gap-7">
            <div className="space-y-16 md:space-y-20">
              {posts.map((post, i) => (
                <article key={post.id} id={post.id} className="space-y-6 scroll-mt-8">
                  <header>
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
                        p: ({node, ...props}) => <p className="smaller" {...props} />
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
