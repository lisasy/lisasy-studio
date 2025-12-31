// Example usage of CloudinaryImage component

import CloudinaryImage from './CloudinaryImage';

// Example 1: Basic usage
export function BasicExample() {
  return (
    <CloudinaryImage
      publicId="lisa-sy-com/portfolio/work-1"
      alt="My portfolio work"
      width={800}
      height={600}
    />
  );
}

// Example 2: With custom transformations
export function TransformExample() {
  return (
    <CloudinaryImage
      publicId="lisa-sy-com/portfolio/work-1"
      alt="My portfolio work"
      width={400}
      height={300}
      cloudinaryOptions={{
        quality: '80',
        crop: 'fill',
        gravity: 'auto'
      }}
      className="rounded-lg"
    />
  );
}

// Example 3: Responsive with fill
export function ResponsiveExample() {
  return (
    <div className="relative w-full h-96">
      <CloudinaryImage
        publicId="lisa-sy-com/portfolio/work-1"
        alt="My portfolio work"
        fill
        cloudinaryOptions={{
          quality: 'auto',
          fetch_format: 'auto'
        }}
        className="object-cover"
      />
    </div>
  );
}

