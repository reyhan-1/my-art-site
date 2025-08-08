'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ArrowUpIcon } from '@heroicons/react/24/solid'; // For the scroll-to-top button

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false); // 👈 New state

  // Handle scroll to toggle background & button visibility
  useEffect(() => {
    const handleScroll = () => {
      if (isHome) {
        setScrolled(window.scrollY > 10);
      }

      setShowScrollTop(window.scrollY > 200); // 👈 Show button after 200px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={`w-full fixed top-0 z-50 transition-all duration-500 ease-in-out ${
          isHome
            ? scrolled
              ? 'bg-black'
              : 'bg-transparent'
            : 'bg-white'
        } ${isHome && !scrolled ? 'text-white' : 'text-black'}`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between font-quicksand font-light">
          {/* Title */}
          <Link
            href="/"
            className="text-base tracking-wide whitespace-nowrap hover:text-rose-800 transition-colors"
          >
            REYHAN UYANIK ART
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-6 text-sm tracking-wide font-light">
            {[
              { href: '/originals', label: 'ORIGINALS' },
              { href: '/art-talks', label: 'ART TALKS' },
              { href: '/about', label: 'ABOUT' },
              { href: '/contact', label: 'CONTACT' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`pb-[2px] transition-all duration-300 border-b ${
                  pathname === href ? 'border-black' : 'border-transparent'
                } hover:text-rose-950`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-95 flex flex-col items-center justify-center space-y-6 text-lg font-light tracking-wide z-40">
              {[
                { href: '/originals', label: 'ORIGINALS' },
                { href: '/art-talks', label: 'ART TALKS' },
                { href: '/about', label: 'ABOUT' },
                { href: '/contact', label: 'CONTACT' },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`transition-all duration-300 ease-in-out ${
                    pathname === href ? 'underline underline-offset-4' : ''
                  } hover:text-rose-300`}
                >
                  {label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Scroll to Top Button (bottom-right corner) */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 md:inline-flex items-center justify-center rounded-full bg-transparent border border-gray text-black p-3 shadow-lg hover:bg-indigo-200 transition-all duration-300"
          aria-label="Scroll to top"
        >
          <ArrowUpIcon className="w-5 h-5" />
        </button>
      )}
    </>
  );
}
