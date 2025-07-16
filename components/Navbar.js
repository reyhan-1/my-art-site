'use client'; // Only needed if using App Router, safe to leave in

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    if (router.pathname === '/') {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      router.push(`/#${id}`);
    }
  };

  return (
    <div className="navbar bg-base-100 shadow">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost">
          <h1 className="font-josefin-sans text-primary-content  text-4xl text-gray-900">
            Reyhan Uyanik
          </h1>
        </Link>
      </div>

      <div className="flex-none">
        <ul
          className={`menu menu-horizontal px-1 space-x-4 md:flex ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <li>
            <button
              onClick={() => scrollToSection('about')}
              className="px-4 font-serif hover:text-primary"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('experience')}
              className="px-4 hover:text-primary"
            >
              Experience
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('education')}
              className="px-4 hover:text-primary"
            >
              Education
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('extras')}
              className="px-4 hover:text-primary"
            >
              Projects & Certifications
            </button>
          </li>
          <li>
            <Link href="/originals" className="px-4 hover:text-primary">
              Paintings
            </Link>
          </li>
        </ul>

        {/* Hamburger menu for mobile */}
        <button className="md:hidden flex items-center" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
