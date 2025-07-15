"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaLinkedin,
  FaTiktok,
  FaFacebook,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

export default function AboutSection() {
  // Array of music platforms with their respective icons and links
  const musicPlatforms = [
    {
      href: "https://www.linkedin.com/company/106714301",
      icon: <FaLinkedin className="text-2xl" />,
      label: "Linkedin",
    },
    {
      href: "https://www.tiktok.com/@champions.of.hope.series",
      icon: <FaTiktok className="text-2xl" />,
      label: "Tiktok",
    },
    {
      href: "https://www.facebook.com/profile.php?id=61577283400098&sk=about",
      icon: <FaFacebook className="text-2xl" />,
      label: "Facebook",
    },

    {
      href: "https://www.youtube.com/@champions.of.hope.series",
      icon: <FaYoutube className="text-2xl" />,
      label: "YouTube",
    },
    {
      href: "https://www.instagram.com/champions.of.hope/",
      icon: <FaInstagram className="text-2xl" />,
      label: "Instagram",
    },
  ];

  return (
    <section className="min-h-screen  flex items-center justify-center p-6 sm:p-12">
      <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Left Side - Image Grid */}
        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className="relative group overflow-hidden  shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <Image
                src={`/assets/AboutSection/squared${index}.jpg`}
                alt={`Gallery Image ${index}`}
                width={400}
                height={400}
                className="object-cover w-full h-48 sm:h-64 lg:h-80  transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Right Side - Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6 p-6 lg:p-10 backdrop-blur-md  shadow-xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold bg-clip-text bg-gradient-to-r leading-tight">
            What We're doing
          </h1>
          <p className="text-md sm:text-xl leading-relaxed">
            Building strong communities of artists and audience members. Fair
            treatment and compensation in a competitive industry. Using our
            gifts, our skills, and our art to support those in need.
          </p>

          <div className="flex justify-center">
            <div className="w-full md:w-10/12 lg:w-9/12 text-center">
              <h4 className="text-xl font-semibold uppercase mb-4">
                Check out our Socials
              </h4>
              <ul className="flex justify-center space-x-4 mt-4">
                {musicPlatforms.map((platform, index) => (
                  <li key={index}>
                    <Link
                      href={platform.href}
                      className="text-white hover:text-gray-400 transition-colors"
                      aria-label={`Purchase music on ${platform.label}`}
                    >
                      {platform.icon}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
