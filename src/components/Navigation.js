"use client"

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { NAV_WIDTH, CONTENT_PADDING, MOBILE_HEADER_HEIGHT } from '@/lib/constants';

function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Don't render navigation on item pages (work/[slug] and sketches/[slug])
  if (pathname?.match(/^\/(work|sketches)\/[^/]+$/)) {
    return null;
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleLinkClick = () => {
    // Close menu immediately when a link is clicked
    closeMobileMenu();
  };

  const navItems = [
    { name: "Work", href: "/work" },
    { name: "Sketches", href: "/sketches" },
    { name: "About", href: "/about" },
    { name: "Notes", href: "/notes" },
  ]

  const isActive = (href) => {
    return pathname === href;
  };

  return (
    <>
      {/* Mobile Menu Header & Button */}
      <aside 
        className="z-50 inline-grid grid-cols-3 md:hidden fixed top-0 left-0 right-0 items-center"
        style={{ height: MOBILE_HEADER_HEIGHT, backgroundColor: 'var(--color-background)' }}
      >
        <button
          onClick={toggleMobileMenu}
          className="text-left pl-5"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <h3 className="text-center">
          <Link href="/work" className="transition-colors">
            Lisa Sy
          </Link>
        </h3>
      </aside>
      
      

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black opacity-50 z-[50]"
          onClick={closeMobileMenu}
        />
      )}

      {/* Navigation Menu */}
      <nav
        className={`border-r-1 border-gray-200 fixed top-0 left-0 bottom-0 flex-row py-2 md:py-8 bg-background z-[60] transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
        style={{ width: NAV_WIDTH }}
      >
        <div className="flex flex-col gap-3 text-base md:text-lg px-3 md:pl-6 md:pr-0">
          <h3 className="hidden md:block">
            <Link href="/work" className="px-4 hover:bg-transparent hover:text-accent-hover">
              Lisa Sy
            </Link>
          </h3>
          <ul className="flex flex-col gap-1 justify-between w-auto md:justify-start">
            {/* Close button for mobile only */}
            <li className="md:hidden">
              <button
                onClick={closeMobileMenu}
                className="py-2 px-2 rounded-lg w-full block text-left flex items-center gap-2"
              >
                <X size={24} />
              </button>
            </li>
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={handleLinkClick}
                    className="py-2 px-4 rounded-lg w-full block hover:bg-background-secondary hover:text-accent-hover transition-colors"
                    style={active ? { backgroundColor: '#dfddd2', fontWeight: '400' } : {}}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navigation;

