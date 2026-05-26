"use client";

import Footer from "@/components/Footer";
import GalleryLightbox from "@/components/GalleryLightbox";
import Navbar from "@/components/Navbar";
import React from "react";

const galleryImages = [
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
