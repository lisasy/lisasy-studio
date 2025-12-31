"use client"

import Image from 'next/image';

/**
 * Optimized Cloudinary Image Component
 * Uses Next.js Image component with Cloudinary CDN
 * 
 * @param {string} publicId - Cloudinary public ID (e.g., "lisa-sy-com/portfolio/image.jpg")
 * @param {string} alt - Alt text for the image
 * @param {number} width - Image width
 * @param {number} height - Image height
 * @param {Object} cloudinaryOptions - Cloudinary transformation options (optional)
 * @param {boolean} usePlaceholder - Use Cloudinary placeholder if publicId not found (optional)
 * @param {Object} nextImageProps - Additional Next.js Image props (optional)
 */
export default function CloudinaryImage({
  publicId,
  alt,
  width,
  height,
  cloudinaryOptions = {},
  usePlaceholder = false,
  className,
  ...nextImageProps
}) {
  // Build transformation string from provided options
  // Cloudinary automatically optimizes, so we only add explicit transformations
  const transformations = Object.entries(cloudinaryOptions)
    .filter(([key, value]) => value !== undefined && value !== null && value !== '')
    .map(([key, value]) => `${key}_${value}`)
    .join(',');

  let imageUrl;
  
  // Use placeholder if specified - Cloudinary's demo account
  if (usePlaceholder || publicId === "sample") {
    const transformPath = transformations ? `${transformations}/` : '';
    imageUrl = `https://res.cloudinary.com/demo/image/upload/${transformPath}sample`;
  } else {
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    if (!cloudName) {
      console.warn('NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME not set. Using placeholder.');
      const transformPath = transformations ? `${transformations}/` : '';
      imageUrl = `https://res.cloudinary.com/demo/image/upload/${transformPath}sample`;
    } else {
      const transformPath = transformations ? `${transformations}/` : '';
      imageUrl = `https://res.cloudinary.com/${cloudName}/image/upload/${transformPath}${publicId}`;
    }
  }

  return (
    <Image
      src={imageUrl}
      alt={alt}
      width={width}
      height={height}
      className={className}
      {...nextImageProps}
    />
  );
}

