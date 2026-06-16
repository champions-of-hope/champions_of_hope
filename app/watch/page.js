"use client";

import Footer from "@/components/Footer";
import GalleryLightbox from "@/components/GalleryLightbox";
import Navbar from "@/components/Navbar";
import React from "react";

const raeCredit = {
  credit: "@raenytuesdayart",
  creditUrl: "https://www.instagram.com/raenytuesdayart/",
};

const galleryImages = [
  {
    src: "/assets/HeroSection/hero1.jpg",
    alt: "Champions of Hope stage detail",
    caption: "Stage moment",
  },
  {
    src: "/assets/HeroSection/hero2.jpg",
    alt: "Champions of Hope live event detail",
    caption: "Live moment",
  },
  {
    src: "/gallery/COH-209.jpg",
    alt: "Champions of Hope crowd and band",
    caption: "Show night",
  },
  {
    src: "/assets/AboutSection/squared1.jpg",
    alt: "Artist performing at a Champions of Hope show",
    caption: "Live performance",
  },
  {
    src: "/assets/AboutSection/squared2.jpg",
    alt: "Community crowd at a Champions of Hope event",
    caption: "Community moments",
  },
  {
    src: "/assets/AboutSection/squared3.jpg",
    alt: "Band performing under red stage lights",
    caption: "Local artists",
  },
  {
    src: "/gallery/coh-10-art2.jpg",
    alt: "Art vendor display at a Champions of Hope event",
    caption: "Local art at COH 10",
  },
  {
    src: "/gallery/coh-10-art3.jpg",
    alt: "Local artwork at Champions of Hope 10",
    caption: "Community art",
  },
  {
    src: "/gallery/coh-10-art4.jpg",
    alt: "Art table at a Champions of Hope show",
    caption: "Artist showcase",
  },
  {
    src: "/gallery/coh-10-artist.jpg",
    alt: "Artist at Champions of Hope 10",
    caption: "COH 10 artist moment",
  },
  {
    src: "/gallery/coh-10-crowd-hand.jpg",
    alt: "Crowd at a Champions of Hope show",
    caption: "Crowd energy",
  },
  {
    src: "/gallery/coh-10-crowd.jpg",
    alt: "Crowd gathered at Champions of Hope 10",
    caption: "COH 10 crowd",
  },
  {
    src: "/gallery/coh-250726-IMG_2204-19-rae.jpg",
    alt: "Mixed media art display table at a Champions of Hope event",
    caption: "Mixed media art display",
    ...raeCredit,
  },
  {
    src: "/gallery/coh-250726-IMG_2178-5-rae.jpg",
    alt: "Local art vendor booth at a Champions of Hope event",
    caption: "Local art vendor booth",
    ...raeCredit,
  },
  {
    src: "/gallery/coh-250726-IMG_2172-2-rae.jpg",
    alt: "Social media links banner with artist and charity QR codes at a Champions of Hope event",
    caption: "Artist and charity QR banner",
    ...raeCredit,
  },
  {
    src: "/gallery/witiko-250726-IMG_3349-72-rae.jpg",
    alt: "Close-up of a guitarist performing at a Champions of Hope show",
    caption: "Live guitar close-up",
    ...raeCredit,
  },
  {
    src: "/gallery/coh-2025-11-14-packed-room-band-performance-rae.jpg",
    alt: "Band performing to a packed room at a Champions of Hope show",
    caption: "Packed room performance",
    ...raeCredit,
  },
  {
    src: "/gallery/251114-IMG_3559-26-rae.jpg",
    alt: "Raffle and stage moment during a Champions of Hope show",
    caption: "Raffle and stage moment",
    ...raeCredit,
  },
  {
    src: "/gallery/251114-IMG_3561-28-rae.jpg",
    alt: "Onstage giveaway moment during a Champions of Hope show",
    caption: "Onstage giveaway moment",
    ...raeCredit,
  },
  {
    src: "/gallery/coh-250726-IMG_2607-48-rae.jpg",
    alt: "Guests browsing prints and artwork at a Champions of Hope vendor table",
    caption: "Guests browsing the vendor table",
    ...raeCredit,
  },
];

const Watch = () => {
  return (
    <div className="bg-[#1E1B1B]">
      <Navbar />
      <GalleryLightbox
        title="Champions of Hope Gallery"
        description="Photos from the shows, artists, volunteers, and community that built Champions of Hope. Click any image to open it full screen, then move through the set like a slideshow."
        images={galleryImages}
      />
      <Footer />
    </div>
  );
};

export default Watch;
