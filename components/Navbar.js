
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-800">
              MyLogo
            </Link>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            <Link href="/" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">
              About
            </Link>
            <Link href="/services" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">
              Services
            </Link>
            <Link href="/contact" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Collapsible) */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" className="block text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link href="/about" className="block text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-base font-medium">
              About
            </Link>
            <Link href="/services" className="block text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-base font-medium">
              Services
            </Link>
            <Link href="/contact" className="block text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-base font-medium">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;