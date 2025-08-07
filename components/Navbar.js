'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [isOpen, setIsOpen] = useState(false);

  return (
<nav className={`w-full fixed top-0 z-50 bg-black ${isHome ? 'bg-transparent' : ''} text-white`}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between font-quicksand font-light">
        {/* Left: Title */}
        <Link href="/" className="text-base tracking-wide whitespace-nowrap hover:text-rose-300 transition-colors">
          REYHAN UYANIK ART
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-6 text-sm tracking-wide font-light">
          <Link href="/originals" className="hover:text-rose-300 transition-colors">ORIGINALS</Link>
          <Link href="/art-talks" className="hover:text-rose-300 transition-colors">ART TALKS</Link>
          <Link href="/about" className="hover:text-rose-300 transition-colors">ABOUT</Link>
          <Link href="/contact" className="hover:text-rose-300 transition-colors">CONTACT</Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <XMarkIcon className="h-6 w-6 text-white" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-white" />
          )}
        </button>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-95 flex flex-col items-center justify-center space-y-6 text-lg font-light tracking-wide z-40">
            <Link href="/originals" className="hover:text-rose-300 transition-colors" onClick={() => setIsOpen(false)}>
              ORIGINALS
            </Link>
            <Link href="/art-talks" className="hover:text-rose-300 transition-colors" onClick={() => setIsOpen(false)}>
              ART TALKS
            </Link>
            <Link href="/about" className="hover:text-rose-300 transition-colors" onClick={() => setIsOpen(false)}>
              ABOUT
            </Link>
            <Link href="/contact" className="hover:text-rose-300 transition-colors" onClick={() => setIsOpen(false)}>
              CONTACT
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
