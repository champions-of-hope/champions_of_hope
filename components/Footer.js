'use client';

import Link from 'next/link';
import { FaInstagram, FaSpotify, FaYoutube, FaTiktok, FaApple } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-[10%] px-6 sm:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Band Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight">Champions of Hope</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              VERY SERIOUS MUSIC FOR NOT SO SERIOUS PEOPLE
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/tour" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Tour Dates
                </Link>
              </li>
              <li>
                <Link href="/music" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Music
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media & Newsletter */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://music.apple.com/us/artist/jars/1743693655" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300">
                <FaApple size={24} />
              </a>
              <a href="https://www.tiktok.com/@jars.band1?_t=8iy0pfbcatt&_r=1" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300">
                <FaTiktok size={24} />
              </a>
              <a href="https://www.instagram.com/champions.of.hope/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300">
                <FaInstagram size={24} />
              </a>
              <a href="https://open.spotify.com/artist/1g3tps1FqLNflYsQ1bheZo" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300">
                <FaSpotify size={24} />
              </a>
              <a href="https://www.youtube.com/@JARS.band1/videos" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Champions Of Hope. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}