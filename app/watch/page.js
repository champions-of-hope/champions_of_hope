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
    src: "/assets/AboutSection/squared4.jpg",
    alt: "Black and white wide shot of a Champions of Hope concert",
    caption: "Champions of Hope live",
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
