"use client"

import React from 'react';
import Link from 'next/link';
import CloudinaryImage from './CloudinaryImage';

/**
 * Wrapper component that makes items clickable
 * Links to individual item permalink pages
 * @param {string} basePath - The base path for the link (e.g., '/work' or '/sketches')
 */
export default function ItemLink({ 
  slug, 
  basePath = '/work',
  publicId, 
  alt, 
  width, 
  height, 
  className,
  children,
  ...imageProps 
}) {
  if (!slug) {
    // If no slug, just render the image without link
    return (
      <CloudinaryImage
        publicId={publicId}
        alt={alt}
        width={width}
        height={height}
        className={className}
        {...imageProps}
      />
    );
  }

  return (
    <Link 
      href={`${basePath}/${slug}`}
      className="block cursor-pointer group"
    >
      <div className="relative overflow-hidden">
        <CloudinaryImage
          publicId={publicId}
          alt={alt}
          width={width}
          height={height}
          className={`${className} transition-opacity group-hover:opacity-90`}
          {...imageProps}
        />
      </div>
      {children}
    </Link>
  );
}

