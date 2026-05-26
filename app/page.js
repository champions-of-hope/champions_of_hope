"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TrustLogos from "@/components/TrustLogos";
// import JARS from "@/components/JARS";
// import Spotify from "@/components/Spotify";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TrustLogos />
      <AboutSection />
      {/* <JARS /> */}
      {/* <Spotify /> */}
      <Footer />
    </>
  );
}
