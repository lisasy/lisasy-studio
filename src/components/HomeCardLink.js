 'use client';

 import React from 'react';
 import Link from 'next/link';

 const clamp = (n, min, max) => Math.min(max, Math.max(min, n));

 export default function HomeCardLink({ href, tooltip, className, children }) {
   const raf = React.useRef(null);

   const setPos = React.useCallback((el, clientX, clientY) => {
     const rect = el.getBoundingClientRect();
    const x = clamp(clientX - rect.left, 0, rect.width);
    const y = clamp(clientY - rect.top, 0, rect.height);
     el.style.setProperty('--tt-x', `${x}px`);
     el.style.setProperty('--tt-y', `${y}px`);
   }, []);

   const onPointerMove = React.useCallback(
     (e) => {
       const el = e.currentTarget;
       if (!el) return;
       if (raf.current) cancelAnimationFrame(raf.current);
       raf.current = requestAnimationFrame(() => setPos(el, e.clientX, e.clientY));
     },
     [setPos]
   );

   const onPointerEnter = React.useCallback(
     (e) => {
       const el = e.currentTarget;
       if (!el) return;
       setPos(el, e.clientX, e.clientY);
     },
     [setPos]
   );

   const onPointerLeave = React.useCallback((e) => {
     const el = e.currentTarget;
     if (!el) return;
     el.style.removeProperty('--tt-x');
     el.style.removeProperty('--tt-y');
   }, []);

   return (
    <span
      className="home-card-wrap"
      data-tooltip={tooltip}
      onPointerMove={onPointerMove}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
    >
      <Link href={href} className={className}>
        {children}
      </Link>
    </span>
   );
 }

