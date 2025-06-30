"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  // Navbar Scroll background trasition function
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        // Trigger after scrolling 50px
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []);

  //Navbar function ended

  return (
    <header
      className={`fixed top-0 left-0 w-full z-30 ${
        !scrolled ? "bg-transparent" : "bg-black"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="w-1/3 md:w-auto">
            <Link href="/">
              <Image
                src="/assets/logo/official_logo.svg"
                alt="Logo"
                width={80}
                height={20}
                // className="object-contain"
              />
            </Link>
          </div>
          <nav className="hidden md:flex justify-end w-2/3">
            <ul className="flex space-x-6 text-white">
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
                  Watch
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-gray-300">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/buytickets" className=" font-semibold">
                  Buy Tickets
                </Link>
              </li>
            </ul>
          </nav>
          {/* Mobile Menu Button */}
          <button className="md:hidden text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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
    </header>
  );
};

export default Navbar;
