"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import MailingListPopup from "@/components/MailingListPopup";

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  //joining mailing list popup
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  //  slider effect
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
            activeSlide === 1 ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat relative"
            style={{ backgroundImage: "url('/assets/HeroSection/hero1.jpg')" }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
            <Image
              src="/assets/HeroSection/hero1.jpg"
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
                Uniting Artists and Audiences to uplift those in need
              </h4>
              <Link
                href="#"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition-colors"
              >
                <button onClick={() => setIsPopupOpen(true)}>
                  Join Mailing List
                </button>
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
            activeSlide === 2 ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat relative"
            style={{ backgroundImage: "url('/assets/HeroSection/hero2.jpg')" }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
            <Image
              src="/assets/HeroSection/hero2.jpg"
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
                Uniting Artists and Audiences to uplift those in need
              </h4>

              <Link
                href="#"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition-colors"
              >
                <button onClick={() => setIsPopupOpen(true)}>
                  Join Mailing List
                </button>
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
              activeSlide === 1 ? "bg-white" : "bg-white/50"
            }`}
          ></button>
          <button
            onClick={() => setActiveSlide(2)}
            className={`w-3 h-3 rounded-full ${
              activeSlide === 2 ? "bg-white" : "bg-white/50"
            }`}
          ></button>
        </div>
      </div>

      {/* Mailing list pop up  */}
      <MailingListPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
      {/* Mailing list pop up ended  */}
    </section>
  );
};

export default HeroSection;
