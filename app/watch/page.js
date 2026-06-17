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
  {
    src: "/gallery/251114-IMG_3171-91-rae.jpg",
    alt: "Trumpet player performing on stage under warm red and orange light",
    caption: "Trumpet performance",
    ...raeCredit,
  },
  {
    src: "/gallery/251114-IMG_3532-163-rae.jpg",
    alt: "Drummer playing with motion blur and colourful stage lights at a Champions of Hope show",
    caption: "Drummer in motion",
    ...raeCredit,
  },
  {
    src: "/gallery/251114-IMG_2936-71-rae.jpg",
    alt: "Local art and vendor table display at a Champions of Hope event",
    caption: "Vendor table and local art",
    ...raeCredit,
  },
  {
    src: "/gallery/251114-IMG_3864-3-rae.jpg",
    alt: "Audience clapping under red stage light trails at a Champions of Hope show",
    caption: "Crowd clapping under stage lights",
    ...raeCredit,
  },
  {
    src: "/gallery/IMG_4141-2.jpg",
    alt: "Performer speaking into a microphone and giving a thumbs-up from the stage",
    caption: "Onstage thumbs-up",
    ...raeCredit,
  },
  {
    src: "/gallery/IMG_9283.jpg",
    alt: "Support your scene shirt displayed on a table at a Champions of Hope event",
    caption: "Support your scene merch",
    ...raeCredit,
  },
  {
    src: "/gallery/IMG_9431.jpg",
    alt: "Crowd gathered near the front during a Champions of Hope show",
    caption: "Crowd at the front",
    ...raeCredit,
  },
  {
    src: "/gallery/IMG_9604.jpg",
    alt: "Black and white close-up of a vocalist singing into a microphone",
    caption: "Black and white vocal moment",
    ...raeCredit,
  },
  {
    src: "/gallery/IMG_8636-16.jpg",
    alt: "Band performing to a crowd with raised hands at a Champions of Hope show",
    caption: "Band playing to the crowd",
    ...raeCredit,
  },
  {
    src: "/gallery/caughtfeelings-250726-IMG_2902-136-rae.jpg",
    alt: "Caught Feelings performing on stage with colourful motion blur",
    caption: "Band in motion",
    ...raeCredit,
  },
  {
    src: "/gallery/caughtfeelings-250726-IMG_2871-126-rae.jpg",
    alt: "Guitarists performing on stage at a Champions of Hope show",
    caption: "Guitarists on stage",
    ...raeCredit,
  },
  {
    src: "/gallery/coh-250726-IMG_2190-13-rae.jpg",
    alt: "Champions of Hope sponsor board with sponsor logos and QR codes",
    caption: "Sponsor board",
    ...raeCredit,
  },
  {
    src: "/gallery/coh-250726-IMG_2228-33-rae.jpg",
    alt: "Local vendor tables and artwork set up inside the venue",
    caption: "Local vendor tables",
    ...raeCredit,
  },
  {
    src: "/gallery/coh-250726-IMG_2229-34-rae.jpg",
    alt: "Stage setup with guitars, drums, and an All For Art sign in the foreground",
    caption: "Stage setup and guitars",
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
