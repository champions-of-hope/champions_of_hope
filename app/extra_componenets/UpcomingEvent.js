// components/UpcomingEvent.js
import { useState, useEffect } from 'react';
import Image from 'next/image';

const UpcomingEvent = () => {
  // Set your tour date here (format: YYYY-MM-DDTHH:MM:SS)
  const tourDate = new Date('2025-12-15T20:00:00');
  
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +tourDate - +new Date();
    
    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        expired: true
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      expired: false
    };
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="relative w-full flex flex-col items-center justify-center overflow-hidden rounded-lg shadow-xl bg-black  lg:mt-[50px] ">
      {/* Tour Image - Half width on desktop, full width on mobile */}
      <div className="w-full md:w-1/2 relative h-64 md:h-96">
        <Image
          src="/assets/UpcomingEvent/UpcomingEvent.jpg" // Replace with your tour image
          alt="Upcoming tour poster"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-90"
        />
      </div>
      
      {/* Countdown Content */}
      <div className="w-full p-8 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
          {timeLeft.expired ? "Tour Has Begun!" : "Next Tour Date"}
        </h2>
        
        <div className="mb-6">
          {/* <p className="text-purple-300 text-lg md:text-xl font-medium mb-1">
            {timeLeft.expired ? "We're on the road!" : "Mark your calendar"}
          </p> */}
          <p className="text-white text-xl md:text-2xl font-semibold">
            {tourDate.toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}
          </p>
        </div>
        
        {timeLeft.expired ? (
          <div className="max-w-2xl mx-auto">
            {/* <h3 className="text-2xl md:text-3xl font-bold text-purple-400 mb-4">
              The show is happening now!
            </h3> */}
            <p className="text-white/80 text-lg font-medium mb-6">
              Last minute tickets may still be available at the venue.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl mx-auto">
            <TimeBox value={timeLeft.days} label="Days" />
            <TimeBox value={timeLeft.hours} label="Hours" />
            <TimeBox value={timeLeft.minutes} label="Minutes" />
            <TimeBox value={timeLeft.seconds} label="Seconds" />
          </div>
        )}
        
        <button className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition-colors mt-[30px]">
          {timeLeft.expired ? "See Tour Dates" : "Get Tickets Now"}
        </button>

        {/* 
        <Link
                href="#"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition-colors"
              >
                Join Newsletter
              </Link>
        */}
      </div>
    </div>
  );
};

const TimeBox = ({ value, label }) => {
  return (
    <div className="bg-black border border-purple-500/50 rounded-lg p-3 md:p-4 text-center">
      <div className="text-3xl md:text-5xl font-black text-purple-400 mb-1">
        {value.toString().padStart(2, '0')}
      </div>
      <div className="text-xs md:text-sm uppercase text-purple-200 tracking-wider font-semibold">
        {label}
      </div>
    </div>
  );
};

export default UpcomingEvent;