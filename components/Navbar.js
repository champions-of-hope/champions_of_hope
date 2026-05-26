"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/fieldproof", label: "FieldProof", featured: true },
  { href: "/#impact", label: "Events" },
  { href: "/#about", label: "About" },
  { href: "/watch", label: "Gallery" },
  { href: "mailto:jimmy.ortiz@championsofhope.io", label: "Contact", external: true },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const renderNavItem = (item, mobile = false) => {
    const className = item.featured
      ? "font-semibold text-[#FFB632] hover:text-white"
      : "hover:text-gray-300";

    if (item.external) {
      return (
        <a href={item.href} className={className} onClick={mobile ? toggleMobileMenu : undefined}>
          {item.label}
        </a>
      );
    }

    return (
      <Link href={item.href} className={className} onClick={mobile ? toggleMobileMenu : undefined}>
        {item.label}
      </Link>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 ${
        !scrolled ? "bg-transparent" : "bg-black"
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="w-1/3 md:w-auto">
            <Link href="/" aria-label="Champions of Hope home">
              <Image
                src="/assets/logo/fieldproof-logo-gold.png"
                alt="Champions of Hope gold logo"
                width={64}
                height={64}
                priority
                className="h-14 w-14 object-contain md:h-16 md:w-16"
              />
            </Link>
          </div>

          <nav className="hidden md:flex justify-end w-2/3">
            <ul className="flex items-center space-x-6 text-white text-base">
              {navItems.map((item) => (
                <li key={item.href}>{renderNavItem(item)}</li>
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
              <li key={item.href}>{renderNavItem(item, true)}</li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;