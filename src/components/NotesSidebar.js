"use client"

import React from 'react';
import { NAV_WIDTH, NOTES_SIDEBAR_WIDTH } from '@/lib/constants';

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

export default function NotesSidebar({ notes, activeId }) {
  const handleClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const feed = document.getElementById('notes-feed');
      if (feed) {
        const offset = el.offsetTop - feed.offsetTop;
        feed.scrollTo({ top: offset - 32, behavior: 'smooth' });
      } else {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      window.history.replaceState(null, '', `#${id}`);
    }
  };

  return (
    <aside className="hidden md:block fixed top-0 bottom-0 overflow-y-auto py-8 pr-4 pl-2 border-r border-foreground/5"
      style={{ left: NAV_WIDTH, width: NOTES_SIDEBAR_WIDTH }}
    >
      <h3 className="mb-3">Notes</h3>
      <nav className="flex flex-col gap-0.5">
        {notes.map((note) => (
          <a
            key={note.id}
            href={`#${note.id}`}
            onClick={(e) => handleClick(e, note.id)}
            className={`block px-3 py-1.5 rounded-[10px] transition-colors cursor-pointer hover:bg-background-secondary-hover ${
              activeId === note.id ? 'bg-background-secondary' : ''
            }`}
          >
            <span className="text-base font-normal leading-[1.3] line-clamp-1 block">{note.title}</span>
            <span className="text-xs text-text-secondary leading-[1.3] block">{formatDate(note.date)}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
}
