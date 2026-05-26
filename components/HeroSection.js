"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === 1 ? 2 : 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen">
      <div className="relative w-full h-screen overflow-hidden">
        {["hero1.jpg", "hero2.jpg"].map((image, index) => {
          const slideNumber = index + 1;
          return (
            <div
              key={image}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
                activeSlide === slideNumber ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat relative"
                style={{ backgroundImage: `url('/assets/HeroSection/${image}')` }}
              >
                <div className="absolute inset-0 bg-black/70"></div>
                <Image
                  src={`/assets/HeroSection/${image}`}
                  alt="Champions of Hope community event background"
                  fill
                  sizes="100vw"
                  className="hidden object-cover"
                  priority={slideNumber === 1}
                />
              </div>
            </div>
          );
        })}

        <div className="absolute inset-0 z-20 flex items-center justify-center px-6 pt-24">
          <div className="mx-auto max-w-6xl text-center text-white">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-[#FFB632]">
              Champions of Hope / FieldProof
            </p>
            <h1 className="text-4xl font-black uppercase leading-tight tracking-tight md:text-6xl lg:text-7xl">
              Community trust, now pointed at trades readiness.
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-200 md:text-xl">
              Champions of Hope started through live events, local artists, sponsors, and community fundraising in Vancouver. We are now building FieldProof: a trades candidate-readiness filter that helps BC contractors and workforce partners waste less time on unready applicants.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/fieldproof"
                className="rounded-full bg-[#FFB632] px-7 py-4 font-bold text-black transition hover:bg-white"
              >
                Review FieldProof
              </Link>
              <a
                href="mailto:jimmy.ortiz@championsofhopeseries.com?subject=FieldProof%20fit-check%20profile"
                className="rounded-full border border-white/40 px-7 py-4 font-bold text-white transition hover:border-white hover:bg-white/10"
              >
                Request a Fit-Check Profile
              </a>
              <Link
                href="/#events"
                className="rounded-full border border-[#3D7AD5] px-7 py-4 font-bold text-white transition hover:bg-[#3D7AD5]"
              >
                Explore Events
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 z-30 flex -translate-x-1/2 transform space-x-2">
          {[1, 2].map((slide) => (
            <button
              key={slide}
              onClick={() => setActiveSlide(slide)}
              className={`h-3 w-3 rounded-full ${
                activeSlide === slide ? "bg-[#FFB632]" : "bg-white/50"
              }`}
              aria-label={`Show slide ${slide}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
