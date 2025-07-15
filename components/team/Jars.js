'use client'
import Image from 'next/image';


import Link from "next/link";
import { FaSpotify, FaApple, FaInstagram, FaTiktok, FaYoutube, FaEnvelope } from "react-icons/fa";

const socialPlatforms = [
  {
    href: "https://open.spotify.com/artist/1g3tps1FqLNflYsQ1bheZo?si=UKsJ_55IS5-USdVVwqjLiQ",
    icon: <FaSpotify className="text-2xl" />,
    label: "Spotify",
  },
  {
    href: "https://music.apple.com/ca/artist/jars/1743693655",
    icon: <FaApple className="text-2xl" />,
    label: "Apple Music",
  },
  {
    href: "https://instagram.com/jars.band",
    icon: <FaInstagram className="text-2xl" />,
    label: "Instagram",
  },
  {
    href: "https://tiktok.com/@jars.band1",
    icon: <FaTiktok className="text-2xl" />,
    label: "TikTok",
  },
  {
    href: "https://www.youtube.com/@JARS.band1",
    icon: <FaYoutube className="text-2xl" />,
    label: "YouTube",
  },
  {
    href: "mailto:jars.band604@gmail.com",
    icon: <FaEnvelope className="text-2xl" />,
    label: "Email",
  },
];


export default function Jars() {
  return (
    <section className="bg-black py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-[4000px] h-[400px] relative">
            <Image
              src="/assets/AudioFilesSection/JARS_group.jpg" // Replace with actual image path
              alt="Team Member"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-white">
            <h2 className="text-3xl font-bold mb-4">The Band Behind the Mission</h2>
            <p className="text-lg leading-relaxed">
              JARS is a collaborative project based in Vancouver, BC, consisting of Jimmy (Frontman/Rhythm guitarist), Shamus (Bass,) Rayne (Drums) and Caleb (Lead Guitar).  We curate music using the vast array of tastes from each member. We like to call ourselves a Shoegaze Folk band, but we leave our music up for the audience to decide. Our music is guided by the principles of playfulness, experimentation with roots in traditional folk music. But don't trust us, listen for yourself!
            </p>
            {/* Socials */}
            <ul className="flex justify-center space-x-4 mt-4">
        {socialPlatforms.map((platform, index) => (
          <li key={index}>
            <Link
              href={platform.href}
              className="text-white hover:text-gray-400 transition-colors"
              aria-label={`Visit us on ${platform.label}`}
            >
              {platform.icon}
            </Link>
          </li>
        ))}
      </ul>
          </div>
        </div>
      </div>
    </section>
  );
}