import React from 'react';

/**
 * Layout wrapper for page content — spacing only, no typography.
 */
export default function PageSection({ children, className = '', narrow = false }) {
  return (
    <div
      className={`flex flex-col gap-3 md:gap-5 text-left${narrow ? ' max-w-3xl' : ''}${className ? ` ${className}` : ''}`}
    >
      {children}
    </div>
  );
}
