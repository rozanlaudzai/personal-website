'use client';

import { useEffect, useState } from 'react';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#education', label: 'Education' },
  { href: '#awards', label: 'Awards' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close on route hash change or escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    const onHashChange = () => setOpen(false);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return (
    <header className="border-b border-[--color-border]/60 sticky top-0 z-20 backdrop-blur bg-background/80">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-semibold tracking-tight heading-accent">Rozan Laudzai</div>

        {/* Desktop nav */}
        <nav className="hidden md:flex text-sm text-[--color-muted] gap-6">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-[--color-foreground]">
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center rounded-md border border-[--color-border] p-2 text-[--color-muted] hover:text-[--color-foreground] hover:border-[--color-foreground] transition"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {open ? (
              <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden border-t border-[--color-border]/60 transition-[max-height] duration-300 ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <nav className="px-6 py-3 flex flex-col gap-3 text-sm bg-background/95">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-[--color-muted] hover:text-[--color-foreground]">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}


