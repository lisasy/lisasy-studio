"use client"

import React from 'react';
import { useRouter } from 'next/navigation';
import CloudinaryImage from '@/components/CloudinaryImage';
import { getAdjacentItems } from '@/lib/item';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function ItemPageClient({ item, slug, basePath }) {
  const router = useRouter();
  const { next, previous } = getAdjacentItems(slug, item.source);

  const handleBack = () => {
    // Redirect to the parent page (e.g., /work or /sketches)
    router.push(basePath);
  };

  return (
    <div className="fixed inset-0 z-50 bg-background overflow-y-auto">
      {/* Header with back button */}
      <header className="sticky top-0 z-10 bg-background border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-base md:text-lg hover:text-accent-hover transition-colors"
            aria-label="Go back"
          >
            <X size={24} />
            <span className="hidden md:inline">Close</span>
          </button>
          
          {/* Navigation arrows */}
          <div className="flex items-center gap-4">
            {previous && (
              <Link
                href={`${basePath}/${previous.slug}`}
                className="p-2 hover:bg-background-secondary rounded transition-colors"
                aria-label="Previous item"
              >
                <ChevronLeft size={24} />
              </Link>
            )}
            {next && (
              <Link
                href={`${basePath}/${next.slug}`}
                className="p-2 hover:bg-background-secondary rounded transition-colors"
                aria-label="Next item"
              >
                <ChevronRight size={24} />
              </Link>
            )}
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="flex flex-col gap-8">
          {/* Image - Full width, centered, with max constraints */}
          <div className="relative w-full px-4 md:px-8" style={{ aspectRatio: `${item.width} / ${item.height}` }}>
            <CloudinaryImage
              publicId={item.publicId}
              alt={item.title}
              width={item.width}
              height={item.height}
              className="w-full h-full object-contain"
              usePlaceholder={item.publicId === "sample"}
            />
          </div>

          {/* Title and Description */}
          <div className="w-full max-w-4xl text-center space-y-4">
            <h5>
              {item.title}
            </h5>
          </div>
        </div>
      </main>
    </div>
  );
}

