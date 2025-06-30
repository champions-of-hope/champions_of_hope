"use client";
import Image from "next/image";
import Link from "next/link";
import {
  FaYoutube,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

const JARS = () => {
  // Social media platforms
  const socialPlatforms = [
    {
      href: "https://www.tiktok.com/@jars.band1?_t=8iy0pfbcatt&_r=1",
      icon: <FaTiktok className="text-2xl" />,
      label: "Tiktok",
    },
    {
      href: "https://www.youtube.com/@JARS.band1/videos",
      icon: <FaYoutube className="text-2xl" />,
      label: "YouTube",
    },
    {
      href: "https://www.instagram.com/jars.band/",
      icon: <FaInstagram className="text-2xl" />,
      label: "Instagram",
    },
  ];

  return (
    <section className="bg-black text-white py-12 border-b border-gray-700">
      {/* First Container: Title */}
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="w-full md:w-10/12 lg:w-9/12 text-center mb-12">
            <div className="block-title">
              <div className="block-bars mb-4"></div>
              <h6 className="font-montserrat text-md uppercase mb-1">
                The Music Behind the Mission
              </h6>
              <h1 className="font-bebas text-4xl md:text-5xl uppercase mb-0">
                JARS
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Second Container: Album Info */}
      <div className="container mx-auto px-4">
        <div className=" lg:w-[80%] flex flex-col lg:flex-row justify-between items-center mx-[10%]">
          <div className="lg:w-8/12 w-full ">
            <Image
              src="/assets/AudioFilesSection/JARS_group.jpg"
              alt="Vinyl"
              width={500}
              height={650}
              className="w-[500px] h-auto mb-0"
            />
          </div>
          <div className="lg:w-3/12 w-full lg:ml-4 mt-6 lg:mt-0">
            <div className="block-content">
              <div className="block-album-info">
                <h5 className="text-md font-montserrat">
                  VERY SERIOUS MUSIC FOR NOT SO SERIOUS PEOPLE
                </h5>
                <br></br>
                <p>Genre: Shoegaze /Folk</p>
                <h5>Band Members : </h5>

                <ul>
                  <li>Jimmy Ortiz(Front Man)</li>
                  <li>Rayne Wood (Drums)</li>
                  <li>Shamus(Base)</li>
                  <li>Caleb O'Brien(Lead Guitar)</li>
                </ul>
              </div>
              <ul className="flex space-x-4 mt-4">
                {socialPlatforms.map((platform, index) => (
                  <li key={index}>
                    <Link
                      href={platform.href}
                      className="text-white hover:text-gray-400 transition-colors"
                      aria-label={`Listen on ${platform.label}`}
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
};

export default JARS;
