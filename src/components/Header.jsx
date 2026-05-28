'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-lg border-b-4 border-sun-yellow">
      <div className="container-custom">
        <div className="flex justify-between items-center py-5">
          <Link href="/" className="flex items-center group">
            <img 
              src="/images/sunair-wordmark.webp" 
              alt="SunAir supply INC Heating & A/C Supply"
              className="h-16 md:h-20 w-auto group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-10 items-center">
            <Link href="/" className="text-gray-800 hover:text-sun-blue font-semibold transition text-sm uppercase tracking-wide hover:scale-105 transform">
              Home
            </Link>
            <Link href="/catalog" className="text-gray-800 hover:text-sun-blue font-semibold transition text-sm uppercase tracking-wide hover:scale-105 transform">
              Catalog
            </Link>
            <Link href="/warranty" className="text-gray-800 hover:text-sun-blue font-semibold transition text-sm uppercase tracking-wide hover:scale-105 transform">
              Warranty
            </Link>
            <Link href="/distributors" className="text-gray-800 hover:text-sun-blue font-semibold transition text-sm uppercase tracking-wide hover:scale-105 transform">
              Distributors
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden md:block px-8 py-3 bg-sun-yellow text-sun-blue hover:bg-sun-yellow-dark rounded-lg font-bold uppercase tracking-wide text-sm transition shadow-md hover:shadow-lg hover:scale-105 transform"
            >
              CONTACT US
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition"
            >
              <svg className="w-6 h-6 text-sun-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <nav className="md:hidden border-t py-4 flex flex-col gap-3 bg-gradient-to-b from-gray-50 to-white px-4 rounded-lg mt-2 shadow-inner">
            <Link href="/" className="px-4 py-3 text-gray-800 hover:text-sun-blue hover:bg-white font-semibold transition rounded-lg">Home</Link>
            <Link href="/catalog" className="px-4 py-3 text-gray-800 hover:text-sun-blue hover:bg-white font-semibold transition rounded-lg">Catalog</Link>
            <Link href="/warranty" className="px-4 py-3 text-gray-800 hover:text-sun-blue hover:bg-white font-semibold transition rounded-lg">Warranty</Link>
            <Link href="/distributors" className="px-4 py-3 text-gray-800 hover:text-sun-blue hover:bg-white font-semibold transition rounded-lg">Distributors</Link>
            <Link href="/contact" className="px-4 py-3 bg-sun-yellow text-sun-blue font-bold text-center rounded-lg mt-2 shadow-md">Contact Us</Link>
          </nav>
        )}
      </div>
    </header>
  );
}
