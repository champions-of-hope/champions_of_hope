import MissionStatement from "@/components/about/missionStatement";
import OurStory from "@/components/about/ourStory";
import OurTimeline from "@/components/about/ourTimeline";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const About = () => {
  return (
    <div>
      <Navbar />
      <OurStory />
      <OurTimeline />
      <MissionStatement />
      <Footer />
    </div>
  );
};

export default About;
