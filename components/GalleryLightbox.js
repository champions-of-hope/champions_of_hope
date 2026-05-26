"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function GalleryLightbox({ title, description, images }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const activeImage = activeIndex !== null ? images[activeIndex] : null;

  const closeLightbox = () => setActiveIndex(null);

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === null ? 0 : current === 0 ? images.length - 1 : current - 1
    );
  };

  const showNext = () => {
    setActiveIndex((current) =>
      current === null ? 0 : current === images.length - 1 ? 0 : current + 1
    );
  };

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex]);

  return (
    <section className="bg-[#1E1B1B] px-6 py-28 text-white sm:px-12">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#FFB632]">
            Gallery
          </p>
          <h1 className="text-4xl font-black uppercase leading-tight sm:text-6xl">
            {title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-gray-200">{description}</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-black text-left shadow-xl"
              aria-label={`Open ${image.alt}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-80"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5">
                <p className="font-bold text-white">{image.caption}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {activeImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 px-4 py-6">
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-5 top-5 rounded-full border border-white/30 px-4 py-2 font-bold text-white transition hover:bg-white hover:text-black"
          >
            Close
          </button>

          <button
            type="button"
            onClick={showPrevious}
            className="absolute left-4 top-1/2 hidden -translate-y-1/2 rounded-full border border-white/30 px-4 py-3 text-2xl font-bold text-white transition hover:bg-white hover:text-black md:block"
            aria-label="Previous image"
          >
            ‹
          </button>

          <div className="relative h-[75vh] w-full max-w-6xl">
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          <button
            type="button"
            onClick={showNext}
            className="absolute right-4 top-1/2 hidden -translate-y-1/2 rounded-full border border-white/30 px-4 py-3 text-2xl font-bold text-white transition hover:bg-white hover:text-black md:block"
            aria-label="Next image"
          >
            ›
          </button>

          <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-3 text-center text-sm text-gray-300">
            <button
              type="button"
              onClick={showPrevious}
              className="rounded-full border border-white/30 px-4 py-2 font-bold text-white md:hidden"
            >
              Prev
            </button>
            <span>
              {activeIndex + 1} / {images.length} · {activeImage.caption}
            </span>
            <button
              type="button"
              onClick={showNext}
              className="rounded-full border border-white/30 px-4 py-2 font-bold text-white md:hidden"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
