'use client'
import Image from "next/image";
import Hero2 from "@/components/Hero2";
import AboutSection from "@/components/AboutSection";
// import DiscographySection from "@/components/Discography";
import UpcomingEvent from "@/components/UpcomingEvent";
import ContactAndFooter from "@/components/ContactSection";
import AudioSection from "@/components/AudioFiles";
// import PreviousEvent from "@/components/PreviousEvent";
import TeamSection from "@/components/TeamSection";

export default function Home() {
  return (
    <>
    {/* <Navbar /> */}
    <Hero2 />
    <UpcomingEvent />
    {/* <PreviousEvent /> */}
    <AboutSection />
    {/* <DiscographySection /> */}
    <AudioSection />
    {/* <TeamSection /> */}
    <ContactAndFooter /> 


    </>
  );
}


/*

JSX not HTML

Vite or V8 javascript -> JS engline compiles the code from javascript to whatever we want 



*/