'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const scrollToSection = (id) => {
    if (router.pathname === '/') {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push(`/#${id}`);
    }
    setIsMenuOpen(false); // Close menu after click
  };

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Education', id: 'education' },
  ];

  return (
    <div className="navbar fixed top-0 left-0 right-0 z-50 bg-base-100 shadow px-4">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-2xl font-italiana">
          Reyhan Uyanik
        </Link>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex space-x-4">
        {navItems.map(({ label, id }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className="hover:text-primary transition-colors font-mont"
          >
            {label}
          </button>
        ))}
        <Link href="/originals" className="hover:text-secondary transition-colors font-mont" onClick={() => setIsMenuOpen(false)}>
          Paintings
        </Link>
      </div>

      {/* Mobile hamburger */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-base-100 shadow-md md:hidden z-50 py-4 px-6 space-y-3">
          {navItems.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="block w-full text-left hover:text-primary transition-colors font-mont"
            >
              {label}
            </button>
          ))}
          <Link href="/originals" className="block hover:text-primary transition-colors font-mont">
            Paintings
          </Link>
        </div>
      )}
    </div>
  );
}
