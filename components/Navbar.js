"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/fieldproof", label: "FieldProof" },
  { href: "/watch", label: "Gallery" },
  { href: "/team", label: "Team" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
                alt="Champions of Hope logo"
                width={90}
                height={25}
                className="object-contain"
              />
            </Link>
          </div>

          <nav className="hidden md:flex justify-end w-2/3">
            <ul className="flex space-x-6 text-white text-base">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={
                      item.href === "/fieldproof"
                        ? "font-semibold text-[#FFB632] hover:text-white"
                        : "hover:text-gray-300"
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle mobile menu"
            onClick={toggleMobileMenu}
          >
            <FaBars />
          </button>
        </div>

        <nav
          className={`md:hidden ${
            isMobileMenuOpen ? "block" : "hidden"
          } bg-black w-full absolute top-full left-0 shadow-lg`}
        >
          <ul className="flex flex-col items-center space-y-4 py-6 text-white text-lg">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={
                    item.href === "/fieldproof"
                      ? "font-semibold text-[#FFB632] hover:text-white"
                      : "hover:text-gray-300"
                  }
                  onClick={toggleMobileMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
