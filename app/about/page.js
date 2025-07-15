import MissionStatement from "@/components/about/missionStatement";
import OurStory from "@/components/about/ourStory";
import OurTimeline from "@/components/about/ourTimeline";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

import Jars from "@/components/team/Jars";
import Spotify from "@/components/Spotify";
import CoreValues from "@/components/about/coreValues";

const About = () => {
  return (
    <div>
      <Navbar />
      <MissionStatement />
      <CoreValues />
      <OurStory />
      <OurTimeline />
      <Jars />
      <Spotify />
      <Footer />
    </div>
  );
};

export default About;
