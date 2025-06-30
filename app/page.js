"use client";


import HeroSection from "@/components/HeroSection";
import JARS from "@/components/JARS";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Spotify from "@/components/Spotify";

export default function Home() {

  return (
    <>
      <Navbar />
      <HeroSection />
      
      <AboutSection />
      <JARS />
      <Spotify />
      <Footer />
    </>
  );
}
