import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="https://topmate.io/cdn-cgi/image/width=384,quality=90/images/common/topmate-dark.svg"
              alt="Topmate Logo"
              className="h-8"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden border border-gray-600 p-3 rounded-lg md:flex items-center space-x-6 text-gray-200">
            <Link to="/" className="hover:text-white font-medium">Home</Link>
            <Link to="/smart-dm" className="hover:text-white">Smart DM</Link>
            <Link to="/listing" className="hover:text-white">Listing</Link>
            <Link to="/experts" className="hover:text-white">For Experts</Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Link
              to="/signup"
              className="bg-white text-black font-medium px-5 py-2 rounded-lg hover:bg-gray-100 transition"
            >
              Join as Expert
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 py-4 border-t border-gray-700">
            <nav className="flex flex-col space-y-4 text-gray-300">
              <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/smart-dm" onClick={() => setIsMenuOpen(false)}>Smart DM</Link>
              <Link to="/listing" onClick={() => setIsMenuOpen(false)}>Listing</Link>
              <Link to="/experts" onClick={() => setIsMenuOpen(false)}>For Experts</Link>
              <Link
                to="/signup"
                onClick={() => setIsMenuOpen(false)}
                className="bg-white text-black px-4 py-2 rounded-lg text-center mt-2"
              >
                Join as Expert
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
