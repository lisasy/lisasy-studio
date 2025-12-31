"use client"

import { useEffect } from 'react';
import type { ReactNode } from 'react';

/**
 * Layout specifically for sketch item pages
 * Adds a class to body to remove main padding via CSS
 */
export default function SketchItemLayout({
  children,
}: {
  children: ReactNode
}) {
  useEffect(() => {
    document.body.classList.add('item-page');
    return () => {
      document.body.classList.remove('item-page');
    };
  }, []);

  return <>{children}</>;
}

