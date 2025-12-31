import React from 'react';

/**
 * TwoColumn Component
 * A reusable two-column layout with a title in the first column
 * and content in the second column (spans 2 columns)
 * 
 * @param {string} title - The title/heading text for the first column
 * @param {React.ReactNode} children - The content for the second column
 * @param {string} className - Additional CSS classes for the container
 */
export default function TwoColumn({ title, children, className = '' }) {
  return (
    <div className={`w-full mt-3 md:mt-6 inline-grid md:grid-cols-3 gap-2 md:gap-4 ${className}`}>
      <h5 className="mb-0 md:mb-5">{title}</h5>
      <div className="md:col-span-2">
        {children}
      </div>
    </div>
  );
}

