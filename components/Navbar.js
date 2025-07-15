"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  // Navbar Scroll background transition function
  const [scrolled, setScrolled] = useState(false);
  // State for mobile menu toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    console.log("i was clicked");
  };


  return (
    <header
      className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 ${
        !scrolled ? "bg-transparent" : "bg-black"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="w-1/3 md:w-auto">
            <Link href="/">
              <Image
                src="/assets/logo/official_logo.svg"
                alt="Logo"
                width={90}
                height={25}
                className="object-contain"
              />
            </Link>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex justify-end w-2/3">
            <ul className="flex space-x-6 text-white text-base">
              <li>
                <Link href="/" className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/watch" className="hover:text-gray-300">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-gray-300">
                  Team
                </Link>
              </li>
              {/* <li>
                <Link href="/buytickets" className="font-semibold">
                  Buy Tickets
                </Link>
              </li> */}
            </ul>
          </nav>
          {/* Mobile Menu Button */}


          <button
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <FaBars onClick={toggleMobileMenu} />
          </button>



        </div>
        {/* Mobile Menu */}
        <nav
          className={`md:hidden ${
            isMobileMenuOpen ? "block" : "hidden"
          } bg-black w-full absolute top-full left-0 shadow-lg`}
        >
          <ul className="flex flex-col items-center space-y-4 py-6 text-white text-lg">
            <li>
              <Link
                href="/"
                className="hover:text-gray-300"
                onClick={toggleMobileMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-gray-300"
                onClick={toggleMobileMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/watch"
                className="hover:text-gray-300"
                onClick={toggleMobileMenu}
              >
                Watch
              </Link>
            </li>
            <li>
              <Link
                href="/team"
                className="hover:text-gray-300"
                onClick={toggleMobileMenu}
              >
                Team
              </Link>
            </li>
            {/* <li>
              <Link
                href="/buytickets"
                className="font-semibold"
                onClick={toggleMobileMenu}
              >
                Buy Tickets
              </Link>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
