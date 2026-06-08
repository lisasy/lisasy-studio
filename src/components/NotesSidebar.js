"use client"

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Library } from 'lucide-react';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function formatDate(dateStr) {
  if (!dateStr) return '';
  const parts = dateStr.split('/');
  if (parts.length === 3) {
    const monthIdx = parseInt(parts[0], 10) - 1;
    const day = parseInt(parts[1], 10);
    const year = parts[2];
    return `${MONTHS[monthIdx]} ${day}, ${year}`;
  }
  return dateStr;
}

export default function NotesSidebar({ notes, activeId, onSelect }) {
  const [desktopOpen, setDesktopOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    onSelect?.(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState(null, '', `#${id}`);
    }
  };

  const nav = (
    <nav className="flex flex-col gap-0.5 px-2">
      {notes.map((note) => (
        <a
          key={note.id}
          href={`#${note.id}`}
          onClick={(e) => handleClick(e, note.id)}
          className={`block px-3 py-2 rounded-[10px] transition-colors cursor-pointer hover:bg-background-secondary-hover ${
            activeId === note.id ? 'bg-background-secondary' : ''
          }`}
        >
          <span className="text-list block truncate">{note.title}</span>
          <span className="text-xs text-text-secondary leading-[1.3] block">{formatDate(note.date)}</span>
        </a>
      ))}
    </nav>
  );

  const menu = (
    <>
      {/* Desktop: hover icon to open; stays open while cursor is on the panel */}
      <div
        className={`notes-menu-shell hidden md:block${desktopOpen ? ' is-open' : ''}`}
        onMouseLeave={() => setDesktopOpen(false)}
      >
        <div
          className="notes-menu-trigger notes-menu-trigger--desktop"
          aria-hidden={desktopOpen}
          onMouseEnter={() => setDesktopOpen(true)}
        >
          <Library size={22} strokeWidth={1.5} />
        </div>
        <aside className="notes-menu-panel" aria-label="Notes list" aria-hidden={!desktopOpen}>
          <div className="py-8 pr-3 pl-1 overflow-y-auto h-full">{nav}</div>
        </aside>
      </div>
    </>
  );

  if (!mounted) return null;

  return createPortal(menu, document.body);
}
