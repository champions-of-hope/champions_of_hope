'use client'; // Since we'll use client-side features

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  // Simple slider effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === 1 ? 2 : 1));
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen">
      {/* Main Slider */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Slide 1 */}
        <div
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            activeSlide === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat relative"
            style={{ backgroundImage: "url('/assets/background_images/background_image2.jpg')" }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
            <Image
              src="/assets/background_images/background_image2.jpg"
              alt="Oumaila Music Band"
              layout="fill"
              objectFit="cover"
              className="hidden"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              CHAMPIONS OF HOPE
              </h1>
              <h4 className="text-lg md:text-xl uppercase mb-6">
              New Single Coming Soon Available This Fall
              </h4>
              <Link
                href="#"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition-colors"
              >
                Join Newsletter
              </Link>

              {/* Buy Tickets  */}
              {/* <Link
                href="#"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition-colors"
              >
                Buy Tickets 
              </Link> */}
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            activeSlide === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat relative"
            style={{ backgroundImage: "url('/assets/background_images/background_image1.jpg')" }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
            <Image
              src="/public/assets/background_images/backround_image2.jpg"
              alt="JARS Performing"
              layout="fill"
              objectFit="cover"
              className="hidden"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                CHAMPIONS OF HOPE
              </h1>
              <h4 className="text-lg md:text-xl uppercase mb-6">
                New Single Coming Soon Available This Fall
              </h4>

              <Link
                href="#"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition-colors"
              >
                Join Newsletter
              </Link>
              
              {/* Comment the top link when need to add buy tickets  */}
              {/* <Link
                href="#"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition-colors"
              >
                Buy Tickets
              </Link> */}
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          <button
            onClick={() => setActiveSlide(1)}
            className={`w-3 h-3 rounded-full ${
              activeSlide === 1 ? 'bg-white' : 'bg-white/50'
            }`}
          ></button>
          <button
            onClick={() => setActiveSlide(2)}
            className={`w-3 h-3 rounded-full ${
              activeSlide === 2 ? 'bg-white' : 'bg-white/50'
            }`}
          ></button>
        </div>
      </div>

      {/* Header */}
      <header className="absolute top-0 left-0 w-full z-30">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="w-1/3 md:w-auto">
              <Link href="#wrapper">
                <Image
                  src="/assets/logo/logo.png"
                  alt="Logo"
                  width={150}
                  height={30}
                  // className="object-contain"
                />
              </Link>
            </div>
            <nav className="hidden md:flex justify-end w-2/3">
              <ul className="flex space-x-6 text-white">
                <li><Link href="#wrapper" className="hover:text-gray-300">Home</Link></li>
                <li><Link href="#about" className="hover:text-gray-300">About</Link></li>
                {/* <li><Link href="#discography" className="hover:text-gray-300">Discography</Link></li> */}
                {/* <li><Link href="#band" className="hover:text-gray-300">Band</Link></li> */}
                <li><Link href="#events" className="hover:text-gray-300">Events</Link></li>
                <li><Link href="#gallery" className="hover:text-gray-300">Team</Link></li>
                <li><Link href="#blog" className="hover:text-gray-300">Newsletter</Link></li>
                <li><Link href="/buytickets" className="cta-button font-semibold">Buy Tickets</Link></li>
              </ul>
            </nav>
            {/* Mobile Menu Button */}
            <button className="md:hidden text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </section>
  );
};

export default HeroSection;