"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import MailingListPopup from "@/components/MailingListPopup";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/fieldproof", label: "FieldProof", featured: true },
  { href: "/#events", label: "Events" },
  { href: "/#about", label: "About" },
  { href: "/watch", label: "Gallery" },
  { href: "mailto:jimmy.ortiz@championsofhopeseries.com", label: "Contact", external: true },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

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

  const openPopup = () => {
    setIsMobileMenuOpen(false);
    setIsPopupOpen(true);
  };

  const renderNavItem = (item, mobile = false) => {
    const base = item.featured
      ? "font-semibold text-[#FFB632] hover:text-white"
      : "hover:text-gray-300";
    // In the panel each row is a full-width 48px target, not an inline word.
    const className = mobile
      ? `${base} flex w-full min-h-[48px] items-center px-5`
      : base;

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
        scrolled
          ? "bg-black"
          : // On a phone the header sits directly on the hero paragraph, so it
            // needs a bar behind it. Desktop keeps transparent-until-scrolled.
            "bg-black/85 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none"
      }`}
    >
      <div className="container mx-auto px-5 py-4 md:px-4 md:py-3">
        <div className="flex items-center justify-between">
          <div className="flex w-1/3 items-center md:w-auto">
            <Link href="/" aria-label="Champions of Hope home" className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center -ml-0.5 md:ml-0">
              <Image
                src="/assets/logo/fieldproof-logo-gold.png"
                alt="Champions of Hope gold logo"
                width={64}
                height={64}
                priority
                className="h-10 w-10 object-contain md:h-16 md:w-16"
              />
            </Link>
          </div>

          <nav className="hidden md:flex justify-end w-2/3">
            <ul className="flex items-center space-x-6 text-white text-base">
              {navItems.map((item) => (
                <li key={item.href}>{renderNavItem(item)}</li>
              ))}
              <li>
                <button
                  onClick={openPopup}
                  className="rounded-full bg-[#FFB632] px-4 py-2 font-semibold text-black transition hover:bg-white"
                >
                  Join List
                </button>
              </li>
            </ul>
          </nav>

          <button
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-lg text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFB632] md:hidden"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            onClick={toggleMobileMenu}
          >
            <FaBars className="h-5 w-5" />
          </button>
        </div>

        <nav
          id="mobile-menu"
          className={`md:hidden ${
            isMobileMenuOpen ? "block" : "hidden"
          } bg-black w-full absolute top-full left-0 shadow-lg`}
        >
          <ul className="flex flex-col items-stretch py-2 text-white text-lg">
            {navItems.map((item) => (
              <li key={item.href} className="flex">
                {renderNavItem(item, true)}
              </li>
            ))}
            <li className="px-5 py-3">
              <button
                onClick={openPopup}
                className="min-h-[44px] w-full rounded-full bg-[#FFB632] px-5 font-semibold text-black transition hover:bg-white"
              >
                Join List
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <MailingListPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </header>
  );
};

export default Navbar;