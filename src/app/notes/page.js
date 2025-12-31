import React from 'react';
import ReactMarkdown from 'react-markdown';
import CloudinaryImage from '@/components/CloudinaryImage';
import { getAllNotes } from '@/lib/notes';

export default function Notes() {
  // Posts are loaded from markdown files in src/data/notes/
  // To add a new post, create a new .md file in that directory
  const posts = getAllNotes();
  
  // Convert MM/DD/YYYY to ISO format for dateTime attribute
  const formatDateForDateTime = (dateStr) => {
    if (!dateStr) return '';
    const parts = dateStr.split('/');
    if (parts.length === 3) {
      // MM/DD/YYYY -> YYYY-MM-DD
      const month = parts[0].padStart(2, '0');
      const day = parts[1].padStart(2, '0');
      const year = parts[2];
      return `${year}-${month}-${day}`;
    }
    return dateStr;
  };

  return (
    <article className="w-full md:w-3/5">
      <div className="text-left text-lg md:text-xl lg:text-2xl leading-[1.33] gap-4 md:gap-7">

        {/* Blog Posts List */}
        <div className="space-y-16 md:space-y-20">
          {posts.map((post) => (
            <article key={post.id} className="space-y-6">
              {/* Post Header */}
              <header>
                <h3 className="">{post.title}</h3>
                <time className="text-base md:text-lg lg:text-xl text-gray-600" dateTime={formatDateForDateTime(post.date)}>
                  {post.date}
                </time>
              </header>

              {/* Post Image (if exists) */}
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

              {/* Post Content */}
              <div className="space-y-6">
                <ReactMarkdown
                  components={{
                    p: ({node, ...props}) => <p className="smaller" {...props} />
                  }}
                >
                  {post.content}
                </ReactMarkdown>
              </div>

              {/* Post Separator */}
              {post.id !== posts[posts.length - 1].id && (
                <hr className="border-t border-gray-300 mt-12" />
              )}
            </article>
          ))}
        </div>
      </div>
    </article>
  )
}
