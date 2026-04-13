"use client"

import { useEffect } from 'react';
import type { ReactNode } from 'react';

export default function StudioArtItemLayout({
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
