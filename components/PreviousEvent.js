import Image from "next/image";
import { useState, useEffect } from "react";

const PreviousEvent = () => {
  // State for countdown timer
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Target date for the countdown (July 27, 2018)
  const targetDate = new Date("July 27, 2018 00:00:00").getTime();

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({
          days,
          hours: hours < 10 ? `0${hours}` : hours,
          minutes: minutes < 10 ? `0${minutes}` : minutes,
          seconds: seconds < 10 ? `0${seconds}` : seconds,
        });
      } else {
        // If the date has passed, set to 00:00:00
        setTimeLeft({ days: 0, hours: "00", minutes: "00", seconds: "00" });
      }
    };

    // Update the countdown every second
    const timer = setInterval(calculateTimeLeft, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="relative h-[920px] bg-black text-white py-12">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/assets/background_images/previousShow.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="w-[full] h-[full]"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-center">
          <div className="w-full lg:w-10/12 text-center">
            <div className="block-content">
              <h1 className="text-4xl md:text-5xl font-bold uppercase mb-2 font-serif">
                Our Previous Event
              </h1>
              <p className="text-lg md:text-xl leading-relaxed">
                31 July 2018 with over 10 shows - Vancouver, BC
              </p>
              <span className="countdown uppercase text-2xl md:text-3xl mb-0">
                {timeLeft.days} days {timeLeft.hours}:{timeLeft.minutes}:
                {timeLeft.seconds}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreviousEvent;