"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";

const raeCredit = {
  credit: "@raenytuesdayart",
  creditUrl: "https://www.instagram.com/raenytuesdayart/",
};

const galleryItems = [
  {
    src: "/gallery/coh-volume-11-crisis-centre-bc-poster.jpg",
    alt: "Champions of Hope Volume XI pop up punk show poster for Crisis Centre BC",
    caption: "Volume XI poster",
    label: "Poster archive",
    type: "poster",
    aspect: "aspect-[3/4]",
    tilt: "lg:-rotate-2",
  },
  {
    src: "/gallery/coh-2025-11-14-packed-room-band-performance-rae.jpg",
    alt: "Band performing to a packed room at a Champions of Hope show",
    caption: "Packed room performance",
    label: "Show photo",
    type: "photo",
    aspect: "aspect-[4/3]",
    tilt: "lg:rotate-1",
    ...raeCredit,
  },
  {
    src: "/gallery/coh-volume-1-first-annual-cmha-poster.jpg",
    alt: "Champions of Hope first annual live music fundraiser poster for the Canadian Mental Health Association",
    caption: "Volume I poster",
    label: "Poster archive",
    type: "poster",
    aspect: "aspect-[3/4]",
    tilt: "lg:rotate-2",
  },
  {
    src: "/gallery/251114-IMG_3864-3-rae.jpg",
    alt: "Audience clapping under red stage light trails at a Champions of Hope show",
    caption: "Crowd clapping under stage lights",
    label: "Show photo",
    type: "photo",
    aspect: "aspect-[4/3]",
    tilt: "lg:-rotate-1",
    ...raeCredit,
  },
  {
    src: "/assets/HeroSection/hero1.jpg",
    alt: "Champions of Hope stage detail",
    caption: "Stage moment",
    label: "Show photo",
    type: "photo",
    aspect: "aspect-[4/3]",
    tilt: "lg:rotate-1",
  },
  {
    src: "/gallery/coh-volume-6-cmha-poster.jpg",
    alt: "Champions of Hope Volume Six poster for CMHA at The Mezzanine",
    caption: "Volume VI poster",
    label: "Poster archive",
    type: "poster",
    aspect: "aspect-[3/4]",
    tilt: "lg:-rotate-1",
  },
  {
    src: "/gallery/251114-IMG_3171-91-rae.jpg",
    alt: "Trumpet player performing on stage under warm red and orange light",
    caption: "Trumpet performance",
    label: "Show photo",
    type: "photo",
    aspect: "aspect-[4/3]",
    tilt: "lg:rotate-2",
    ...raeCredit,
  },
  {
    src: "/gallery/coh-250726-IMG_2172-2-rae.jpg",
    alt: "Social media links banner with artist and charity QR codes at a Champions of Hope event",
    caption: "Artist and charity QR banner",
    label: "Show photo",
    type: "photo",
    aspect: "aspect-[4/3]",
    tilt: "lg:-rotate-2",
    ...raeCredit,
  },
  {
    src: "/gallery/coh-volume-4-vancouver-aboriginal-friendship-centre-poster.jpg",
    alt: "Champions of Hope Volume 4 poster for the Vancouver Aboriginal Friendship Centre at The Astoria",
    caption: "Volume IV poster",
    label: "Poster archive",
    type: "poster",
    aspect: "aspect-[3/4]",
    tilt: "lg:rotate-1",
  },
  {
    src: "/gallery/coh-250726-IMG_2204-19-rae.jpg",
    alt: "Mixed media art display table at a Champions of Hope event",
    caption: "Mixed media art display",
    label: "Show photo",
    type: "photo",
    aspect: "aspect-[4/3]",
    tilt: "lg:rotate-1",
    ...raeCredit,
  },
  {
    src: "/gallery/IMG_9431.jpg",
    alt: "Crowd gathered near the front during a Champions of Hope show",
    caption: "Crowd at the front",
    label: "Show photo",
    type: "photo",
    aspect: "aspect-[4/3]",
    tilt: "lg:-rotate-1",
    ...raeCredit,
  },
  {
    src: "/gallery/coh-volume-8-carnegie-housing-project-poster.jpg",
    alt: "Champions of Hope Volume Eight poster for Carnegie Housing Project at The Mezzanine",
    caption: "Volume VIII poster",
    label: "Poster archive",
    type: "poster",
    aspect: "aspect-[3/4]",
    tilt: "lg:-rotate-2",
  },
  {
    src: "/gallery/witiko-250726-IMG_3349-72-rae.jpg",
    alt: "Close-up of a guitarist performing at a Champions of Hope show",
    caption: "Live guitar close-up",
    label: "Show photo",
    type: "photo",
    aspect: "aspect-[4/3]",
    tilt: "lg:rotate-2",
    ...raeCredit,
  },
  {
    src: "/gallery/251114-IMG_3561-28-rae.jpg",
    alt: "Onstage giveaway moment during a Champions of Hope show",
    caption: "Onstage giveaway moment",
    label: "Show photo",
    type: "photo",
    aspect: "aspect-[4/3]",
    tilt: "lg:-rotate-1",
    ...raeCredit,
  },
  {
    src: "/gallery/coh-volume-3-vancouver-food-bank-poster.jpg",
    alt: "Champions of Hope Volume 3 poster for the Vancouver Food Bank",
    caption: "Volume III poster",
    label: "Poster archive",
    type: "poster",
    aspect: "aspect-[3/4]",
    tilt: "lg:rotate-2",
  },
  {
    src: "/gallery/251114-IMG_3532-163-rae.jpg",
    alt: "Drummer playing with motion blur and colourful stage lights at a Champions of Hope show",
    caption: "Drummer in motion",
    label: "Show photo",
    type: "photo",
    aspect: "aspect-[3/4]",
    tilt: "lg:rotate-1",
    ...raeCredit,
  },
  {
    src: "/gallery/coh-250726-IMG_2228-33-rae.jpg",
    alt: "Local vendor tables and artwork set up inside the venue",
    caption: "Local vendor tables",
    label: "Show photo",
    type: "photo",
    aspect: "aspect-[4/3]",
    tilt: "lg:-rotate-2",
    ...raeCredit,
  },
  {
    src: "/gallery/coh-volume-9-empower-through-music-poster.jpg",
    alt: "Champions of Hope Volume 9 poster for Empower Through Music at The Mezzanine",
    caption: "Volume IX poster",
    label: "Poster archive",
    type: "poster",
    aspect: "aspect-[3/4]",
    tilt: "lg:-rotate-1",
  },
  {
    src: "/gallery/IMG_9604.jpg",
    alt: "Black and white close-up of a vocalist singing into a microphone",
    caption: "Black and white vocal moment",
    label: "Show photo",
    type: "photo",
    aspect: "aspect-[3/4]",
    tilt: "lg:rotate-1",
    ...raeCredit,
  },
  {
    src: "/gallery/coh-250726-IMG_2190-13-rae.jpg",
    alt: "Champions of Hope sponsor board with sponsor logos and QR codes",
    caption: "Sponsor board",
    label: "Show photo",
    type: "photo",
    aspect: "aspect-[3/4]",
    tilt: "lg:rotate-2",
    ...raeCredit,
  },
  {
    src: "/gallery/coh-volume-5-downtown-eastside-womens-centre-poster.jpg",
    alt: "Champions of Hope Volume Five poster for the Downtown Eastside Women's Centre at The Mezzanine",
    caption: "Volume V poster",
    label: "Poster archive",
    type: "poster",
    aspect: "aspect-[3/4]",
    tilt: "lg:rotate-1",
  },
  {
    src: "/gallery/coh-250726-IMG_2607-48-rae.jpg",
    alt: "Guests browsing prints and artwork at a Champions of Hope vendor table",
    caption: "Guests browsing the vendor table",
    label: "Show photo",
    type: "photo",
    aspect: "aspect-[4/3]",
    tilt: "lg:-rotate-1",
    ...raeCredit,
  },
  {
    src: "/gallery/caughtfeelings-250726-IMG_2902-136-rae.jpg",
    alt: "Caught Feelings performing on stage with colourful motion blur",
    caption: "Band in motion",
    label: "Show photo",
    type: "photo",
    aspect: "aspect-[4/3]",
    tilt: "lg:rotate-1",
    ...raeCredit,
  },
  {
    src: "/gallery/coh-volume-10-backpack-buddies-poster.jpg",
    alt: "Champions of Hope Volume X poster for Backpack Buddies at The Mezzanine",
    caption: "Volume X poster",
    label: "Poster archive",
    type: "poster",
    aspect: "aspect-[3/4]",
    tilt: "lg:-rotate-2",
  },
  {
    src: "/gallery/COH-209.jpg",
    alt: "Champions of Hope crowd and band",
    caption: "Show night",
    label: "Show photo",
    type: "photo",
    aspect: "aspect-[4/3]",
    tilt: "lg:-rotate-1",
  },
  {
    src: "/gallery/coh-volume-2-vancouver-christmas-bureau-poster.jpg",
    alt: "Champions of Hope Volume 2 poster for the Vancouver Christmas Bureau",
    caption: "Volume II poster",
    label: "Poster archive",
    type: "poster",
    aspect: "aspect-[3/4]",
    tilt: "lg:rotate-2",
  },
  {
    src: "/gallery/IMG_8636-16.jpg",
    alt: "Band performing to a crowd with raised hands at a Champions of Hope show",
    caption: "Band playing to the crowd",
    label: "Show photo",
    type: "photo",
    aspect: "aspect-[4/3]",
    tilt: "lg:rotate-2",
    ...raeCredit,
  },
  {
    src: "/gallery/caughtfeelings-250726-IMG_2871-126-rae.jpg",
    alt: "Guitarists performing on stage at a Champions of Hope show",
    caption: "Guitarists on stage",
    label: "Show photo",
    type: "photo",
    aspect: "aspect-[4/3]",
    tilt: "lg:-rotate-1",
    ...raeCredit,
  },
  {
    src: "/gallery/coh-volume-7-lower-mainland-christmas-bureau-poster.jpg",
    alt: "Champions of Hope Volume Seven poster for the Lower Mainland Christmas Bureau at The Cobalt",
    caption: "Volume VII poster",
    label: "Poster archive",
    type: "poster",
    aspect: "aspect-[3/4]",
    tilt: "lg:-rotate-1",
  },
  {
    src: "/gallery/coh-250726-IMG_2229-34-rae.jpg",
    alt: "Stage setup with guitars, drums, and an All For Art sign in the foreground",
    caption: "Stage setup and guitars",
    label: "Show photo",
    type: "photo",
    aspect: "aspect-[4/3]",
    tilt: "lg:rotate-1",
    ...raeCredit,
  },
  {
    src: "/gallery/IMG_4141-2.jpg",
    alt: "Performer speaking into a microphone and giving a thumbs-up from the stage",
    caption: "Onstage thumbs-up",
    label: "Show photo",
    type: "photo",
    aspect: "aspect-[4/3]",
    tilt: "lg:-rotate-2",
    ...raeCredit,
  },
  {
    src: "/gallery/251114-IMG_2936-71-rae.jpg",
    alt: "Local art and vendor table display at a Champions of Hope event",
    caption: "Vendor table and local art",
    label: "Show photo",
    type: "photo",
    aspect: "aspect-[4/3]",
    tilt: "lg:rotate-2",
    ...raeCredit,
  },
  {
    src: "/gallery/IMG_9283.jpg",
    alt: "Support your scene shirt displayed on a table at a Champions of Hope event",
    caption: "Support your scene merch",
    label: "Show photo",
    type: "photo",
    aspect: "aspect-[3/4]",
    tilt: "lg:-rotate-1",
    ...raeCredit,
  },
  {
    src: "/assets/HeroSection/hero2.jpg",
    alt: "Champions of Hope live event detail",
    caption: "Live moment",
    label: "Show photo",
    type: "photo",
    aspect: "aspect-[4/3]",
    tilt: "lg:rotate-1",
  },
  {
    src: "/assets/AboutSection/squared2.jpg",
    alt: "Community crowd at a Champions of Hope event",
    caption: "Community moments",
    label: "Show photo",
    type: "photo",
    aspect: "aspect-[4/3]",
    tilt: "lg:-rotate-2",
  },
  {
    src: "/gallery/coh-10-art2.jpg",
    alt: "Art vendor display at a Champions of Hope event",
    caption: "Local art at COH 10",
    label: "Show photo",
    type: "photo",
    aspect: "aspect-[4/3]",
    tilt: "lg:rotate-2",
  },
  {
    src: "/gallery/coh-10-crowd.jpg",
    alt: "Crowd gathered at Champions of Hope 10",
    caption: "COH 10 crowd",
    label: "Show photo",
    type: "photo",
    aspect: "aspect-[4/3]",
    tilt: "lg:-rotate-1",
  },
  {
    src: "/gallery/coh-10-artist.jpg",
    alt: "Artist at Champions of Hope 10",
    caption: "COH 10 artist moment",
    label: "Show photo",
    type: "photo",
    aspect: "aspect-[4/3]",
    tilt: "lg:rotate-1",
  },
  {
    src: "/assets/AboutSection/squared1.jpg",
    alt: "Artist performing at a Champions of Hope show",
    caption: "Live performance",
    label: "Show photo",
    type: "photo",
    aspect: "aspect-[4/3]",
    tilt: "lg:rotate-2",
  },
  {
    src: "/assets/AboutSection/squared3.jpg",
    alt: "Band performing under red stage lights",
    caption: "Local artists",
    label: "Show photo",
    type: "photo",
    aspect: "aspect-[4/3]",
    tilt: "lg:-rotate-1",
  },
];

const tapeStyles = [
  "left-4 -top-3 rotate-[-8deg] bg-[#FFB632]",
  "right-8 -top-3 rotate-[7deg] bg-[#F05A28]",
  "left-1/2 -top-3 -translate-x-1/2 rotate-[2deg] bg-white/80",
  "left-8 -top-3 rotate-[4deg] bg-[#50C9CE]",
];

function GalleryCard({ item, index, onOpen }) {
  const tapeClass = tapeStyles[index % tapeStyles.length];
  const isPoster = item.type === "poster";

  return (
    <button
      type="button"
      onClick={onOpen}
      className={`group relative mb-8 w-full break-inside-avoid text-left transition duration-300 hover:z-20 hover:-translate-y-1 ${item.tilt}`}
      aria-label={`Open ${item.caption}`}
    >
      <span className={`absolute z-10 h-7 w-24 opacity-90 shadow-md ${tapeClass}`} />
      <div
        className={`relative overflow-hidden border shadow-2xl transition duration-300 group-hover:scale-[1.015] ${
          isPoster
            ? "rounded-sm border-black/20 bg-[#F6E8C8] p-2"
            : "rounded-xl border-white/20 bg-white p-2"
        }`}
      >
        <div className={`relative overflow-hidden ${item.aspect} ${isPoster ? "rounded-sm" : "rounded-lg"}`}>
          <Image
            src={item.src}
            alt={item.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
        <div className="px-2 pb-2 pt-3">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#F05A28]">
            {item.label}
          </p>
          <p className="mt-1 text-lg font-black uppercase leading-tight text-[#1E1B1B]">
            {item.caption}
          </p>
        </div>
      </div>
    </button>
  );
}

export default function Watch() {
  const [activeIndex, setActiveIndex] = useState(null);
  const activeItem = activeIndex !== null ? galleryItems[activeIndex] : null;

  const closeLightbox = () => setActiveIndex(null);
  const showPrevious = () => {
    setActiveIndex((current) =>
      current === null ? 0 : current === 0 ? galleryItems.length - 1 : current - 1
    );
  };
  const showNext = () => {
    setActiveIndex((current) =>
      current === null ? 0 : current === galleryItems.length - 1 ? 0 : current + 1
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
    <div className="min-h-screen bg-[#1E1B1B] text-white">
      <Navbar />

      <main className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,182,50,0.16),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(240,90,40,0.14),_transparent_35%)]" />
        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(90deg,#ffffff_1px,transparent_1px),linear-gradient(#ffffff_1px,transparent_1px)] [background-size:42px_42px]" />

        <section className="relative px-6 pb-10 pt-28 sm:px-12 lg:pt-32">
          <div className="container mx-auto max-w-7xl">
            <div className="grid items-end gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <p className="mb-4 inline-block rotate-[-2deg] bg-[#FFB632] px-4 py-2 text-sm font-black uppercase tracking-[0.25em] text-[#1E1B1B] shadow-lg">
                  Gallery archive
                </p>
                <h1 className="max-w-4xl text-5xl font-black uppercase leading-[0.9] text-white sm:text-7xl lg:text-8xl">
                  Show posters. Crowd shots. Local proof.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75 sm:text-xl">
                  A scrapbook-style archive from Champions of Hope shows, built from live photos, poster art, artist moments, vendor tables, and the people who keep showing up.
                </p>
              </div>

              <div className="relative hidden min-h-[430px] lg:block">
                <div className="absolute left-0 top-10 w-56 rotate-[-8deg] rounded-sm bg-white p-2 shadow-2xl">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                    <Image
                      src="/gallery/coh-volume-11-crisis-centre-bc-poster.jpg"
                      alt="Champions of Hope Volume XI poster"
                      fill
                      sizes="240px"
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
                <div className="absolute right-0 top-0 w-72 rotate-[7deg] rounded-xl bg-white p-2 shadow-2xl">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                    <Image
                      src="/gallery/coh-2025-11-14-packed-room-band-performance-rae.jpg"
                      alt="Band performing to a packed room"
                      fill
                      sizes="320px"
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
                <div className="absolute bottom-4 left-24 w-64 rotate-[3deg] rounded-xl bg-white p-2 shadow-2xl">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                    <Image
                      src="/gallery/IMG_9431.jpg"
                      alt="Crowd at the front of a Champions of Hope show"
                      fill
                      sizes="300px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative px-6 pb-24 sm:px-12">
          <div className="container mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col gap-4 border-y border-white/15 py-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm font-black uppercase tracking-[0.3em] text-[#FFB632]">
                DIY archive wall
              </p>
              <p className="max-w-2xl text-sm leading-6 text-white/65">
                Click any piece to open it full-screen. Show photos include photographer credit in the lightbox.
              </p>
            </div>

            <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 2xl:columns-4">
              {galleryItems.map((item, index) => (
                <GalleryCard
                  key={`${item.src}-${index}`}
                  item={item}
                  index={index}
                  onOpen={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      {activeItem && (
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

          <div className="relative h-[76vh] w-full max-w-6xl">
            <Image
              src={activeItem.src}
              alt={activeItem.alt}
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

          <div className="absolute bottom-5 left-1/2 flex w-[92vw] max-w-3xl -translate-x-1/2 items-center justify-between gap-3 text-center text-sm text-gray-300">
            <button
              type="button"
              onClick={showPrevious}
              className="rounded-full border border-white/30 px-4 py-2 font-bold text-white md:hidden"
            >
              Prev
            </button>
            <span className="mx-auto">
              {activeIndex + 1} / {galleryItems.length} · {activeItem.caption}
              {activeItem.credit && (
                <span className="mt-1 block text-xs text-gray-400">
                  Photo: {activeItem.credit}
                  {activeItem.creditUrl && (
                    <>
                      {" "}
                      <a
                        href={activeItem.creditUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-[#FFB632] underline-offset-4 hover:underline"
                      >
                        Instagram
                      </a>
                    </>
                  )}
                </span>
              )}
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

      <Footer />
    </div>
  );
}
