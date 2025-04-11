import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  // State to toggle the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu on mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar bg-base-100 shadow">
      <div className="flex-1">
      <Link href="/" className="btn btn-ghost">
        <h1 className="text-primary-content font-shadows-into-light text-4xl text-gray-900">Reyhan Uyanik Art</h1>
          {/* <img src="/R.png" alt="Reyhan Uyanik Art" className="h-12" /> */}
        </Link>
      </div>
      <div className="flex-none">
        <ul
          className={`menu menu-horizontal px-1 space-x-4 md:flex ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <li>
            <Link href="/originals" className="text-lg hover:scale-105">
              Originals
            </Link>
          </li>
          <li>
            <Link href="/commissions" className="text-lg hover:scale-105">
              Commissions
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-lg hover:scale-105">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-lg hover:scale-105">
              About
            </Link>
          </li>
          <li>
            <Link href="/art-talks" className="text-lg hover:scale-105">
              Art Talks
            </Link>
          </li>
        </ul>
        {/* Hamburger menu for mobile view */}
        <button
          className="md:hidden flex items-center"
          onClick={toggleMenu}
        >
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