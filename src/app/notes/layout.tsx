"use client"

import { useEffect } from 'react';
import type { ReactNode } from 'react';

export default function NotesLayout({
  children,
}: {
  children: ReactNode
}) {
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const main = document.querySelector('main');
    const wrapper = main?.querySelector(':scope > div') as HTMLElement | null;

    html.style.overflow = 'hidden';
    body.style.overflow = 'hidden';

    if (main) {
      main.style.padding = '0';
      main.style.marginLeft = '0';
      main.style.overflow = 'hidden';
    }
    if (wrapper) {
      wrapper.style.maxWidth = 'none';
      wrapper.style.margin = '0';
      wrapper.style.width = '100%';
      wrapper.style.height = '100%';
      wrapper.style.transform = 'none';
      wrapper.style.translate = 'none';
    }

    return () => {
      html.style.overflow = '';
      body.style.overflow = '';
      if (main) {
        main.style.padding = '';
        main.style.marginLeft = '';
        main.style.overflow = '';
      }
      if (wrapper) {
        wrapper.style.maxWidth = '';
        wrapper.style.margin = '';
        wrapper.style.width = '';
        wrapper.style.height = '';
        wrapper.style.transform = '';
        wrapper.style.translate = '';
      }
    };
  }, []);

  return <>{children}</>;
}
