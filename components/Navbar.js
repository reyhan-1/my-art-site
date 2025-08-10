'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ArrowUpIcon } from '@heroicons/react/24/solid';

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isHome) {
        setScrolled(window.scrollY > 10);
      }
      setShowScrollTop(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    }, [isOpen]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { href: '/originals', label: 'ORIGINALS' },
    { href: '/art-talks', label: 'ART TALKS' },
    { href: '/about', label: 'ABOUT' },
    { href: '/contact', label: 'CONTACT' },
    // { href: '/breathing', label: 'BREATHING'}
  ];

  return (
    <>
      <nav
        className={`w-full fixed top-0 z-50 transition-all duration-500 ease-in-out ${
          isHome ? (scrolled ? 'bg-black' : 'bg-transparent') : 'bg-white'
        } ${isHome ? 'text-white' : 'text-black'}`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between font-quicksand font-light relative">
          <Link
            href="/"
            className="text-base tracking-wide whitespace-nowrap hover:text-indigo-900 transition-colors"
          >
            REYHAN UYANIK ART
          </Link>

          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-6 text-sm tracking-wide font-light">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`pb-[2px] transition-all duration-300 border-b ${
                  pathname === href ? (isHome ? 'border-white' : 'border-black') : 'border-transparent'
                } hover:text-indigo-400`}
              >
                {label}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden z-60"
            aria-label="Toggle menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <XMarkIcon className="w-8 h-8" />
            ) : (
              <Bars3Icon className="w-8 h-8" />
            )}
          </button>

          {/* Mobile menu overlay */}
          {isOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-90 text-white md:hidden z-50"
              onClick={() => setIsOpen(false)}
            >
              {/* Prevent link clicks from closing menu */}
              <div
                className="flex flex-col justify-center p-8 space-y-8 h-full relative z-50"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                  className="absolute top-4 right-4 z-60"
                >
                  <XMarkIcon className="w-10 h-10 hover:text-indigo-400 transition-colors" />
                </button>

                {navLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="text-lg text-center font-quicksand tracking-wide hover:text-indigo-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

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
