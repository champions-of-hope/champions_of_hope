'use client'; // Since we'll use some client-side features

import React, { useEffect, useRef } from 'react';

const HeroSection = () => {
  const videoRef = useRef(null);

  // Optional: Control video playback
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.0; // You can adjust speed if needed
    }
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      {/* <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/assets/hero_background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
          Welcome to the Future
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto animate-fade-in-up">
          Experience innovation like never before with our cutting-edge solutions
        </p>
      </div>

      {/* Optional: Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center items-start p-2">
          <div className="w-1 h-3 bg-white rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;