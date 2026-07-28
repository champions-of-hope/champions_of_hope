"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const heroSlides = [
  {
    src: "/assets/HeroSection/hero1.jpg",
    alt: "Champions of Hope community event background",
  },
  {
    src: "/assets/HeroSection/hero2.jpg",
    alt: "Champions of Hope live event background",
  },
  {
    src: "/gallery/COH-209.jpg",
    alt: "Wide black and white Champions of Hope concert crowd and band photo",
  },
];

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen">
      <div className="relative min-h-[100svh] w-full overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.src}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
              activeSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat relative"
              style={{ backgroundImage: `url('${slide.src}')` }}
            >
              <div className="absolute inset-0 bg-black/75"></div>
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="100vw"
                className="hidden object-cover"
                priority={index === 0}
              />
            </div>
          </div>
        ))}

        <div className="absolute inset-0 z-20 flex items-center justify-center px-6 pb-24 pt-28 md:pt-32">
          <div className="mx-auto w-full max-w-6xl text-white">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#FFB632]">
                Champions of Hope
              </p>
              <h1 className="mt-4 text-4xl font-black uppercase leading-tight tracking-tight md:text-6xl lg:text-7xl">
                One name. Two things.
              </h1>
              <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-gray-200 md:text-lg">
                We run benefit music shows for local artists and causes in Vancouver. We also run FieldProof, the licensed trades-hiring arm those shows built. Pick the door that is yours.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {/* FieldProof door — first in the DOM so it stacks on top on mobile */}
              <div className="flex flex-col rounded-3xl border border-[#FFB632]/40 bg-black/50 p-7 backdrop-blur-sm md:p-8">
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#FFB632]">
                  FieldProof / Trades hiring
                </p>
                <h2 className="mt-3 text-2xl font-black uppercase leading-tight md:text-3xl">
                  Hiring or working the trades.
                </h2>
                <p className="mt-3 flex-1 text-base leading-7 text-gray-200">
                  Verified trades hiring across Metro Vancouver and the Fraser Valley.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/fieldproof"
                    className="rounded-full bg-[#FFB632] px-6 py-3 text-center font-bold text-black transition hover:bg-white sm:flex-1"
                  >
                    I&apos;m hiring
                  </Link>
                  <Link
                    href="/get-verified"
                    className="rounded-full border border-white/40 px-6 py-3 text-center font-bold text-white transition hover:border-white hover:bg-white/10 sm:flex-1"
                  >
                    I&apos;m a tradesperson
                  </Link>
                </div>
              </div>

              {/* Champions of Hope door */}
              <div className="flex flex-col rounded-3xl border border-[#3D7AD5]/40 bg-black/50 p-7 backdrop-blur-sm md:p-8">
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#6ea3f0]">
                  Champions of Hope / Live music
                </p>
                <h2 className="mt-3 text-2xl font-black uppercase leading-tight md:text-3xl">
                  Shows, artists and causes.
                </h2>
                <p className="mt-3 flex-1 text-base leading-7 text-gray-200">
                  Live music, local artists, and money raised for local causes.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/#events"
                    className="rounded-full bg-[#3D7AD5] px-6 py-3 text-center font-bold text-white transition hover:bg-white hover:text-black sm:flex-1"
                  >
                    See the events
                  </Link>
                  <Link
                    href="/watch"
                    className="rounded-full border border-white/40 px-6 py-3 text-center font-bold text-white transition hover:border-white hover:bg-white/10 sm:flex-1"
                  >
                    View the gallery
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 z-30 hidden -translate-x-1/2 transform space-x-2 md:flex">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.src}
              onClick={() => setActiveSlide(index)}
              className={`h-3 w-3 rounded-full ${
                activeSlide === index ? "bg-[#FFB632]" : "bg-white/50"
              }`}
              aria-label={`Show slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
