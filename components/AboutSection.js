import Image from "next/image";
import Link from "next/link";
import {
  FaApple,
  FaGooglePlay,
  FaAmazon,
  FaSoundcloud,
  FaSpotify,
  FaYoutube,
} from "react-icons/fa";


const AboutSection = () => {


    // Array of music platforms with their respective icons and links
    const musicPlatforms = [
      { href: "#", icon: <FaApple className="text-2xl" />, label: "Apple" },
      {
        href: "#",
        icon: <FaGooglePlay className="text-2xl" />,
        label: "Google Play",
      },
      { href: "#", icon: <FaAmazon className="text-2xl" />, label: "Amazon" },
      {
        href: "#",
        icon: <FaSoundcloud className="text-2xl" />,
        label: "SoundCloud",
      },
      { href: "#", icon: <FaSpotify className="text-2xl" />, label: "Spotify" },
      { href: "#", icon: <FaYoutube className="text-2xl" />, label: "YouTube" },
    ];


  return (
    <section id="about" className="relative bg-black text-white border-b border-gray-800 py-12 lg:mt-8">
      {/* Pattern Image (Background) */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/img/right-pattern.png"
          alt="Pattern"
          objectFit="cover"
          className="w-full h-full"
          width={1920} // Fallback dimensions for background image
          height={1080}
        />
      </div>

      {/* First Container: Music Introduction */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Column: Text */}
          <div className="w-full md:w-5/12 text-center mb-8 md:mb-0">
            <h1 className="text-xl md:text-3xl font-bold uppercase mb-0">
              A Different <br /> Kind of Music
            </h1>
            <p className="mt-4 text-lg md:text-xl leading-relaxed w-11/12 mx-auto">
              We are Champions of Hope, a local Vancouver based band run by locals, loved by locals. Join us and enjoy. 
            </p>
            <div className="mt-4 w-24 mx-auto">
              <Image
                src="/next.svg"
                alt="Signature"
                width={96}
                height={48}
                layout="responsive"
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Column: Images */}
          <div className="w-full md:w-6/12 md:ml-4">
            <div className="flex flex-wrap -mx-2">
              <div className="w-1/2 px-2">
                <div className="relative w-full h-48 md:h-64">
                  <Image
                    src="/assets/AboutSection/image1.jpg"
                    alt="Music Image 1"
                    objectFit="cover"
                    className="rounded"
                    width={300} // Fallback dimensions
                    height={300}
                  />
                </div>
              </div>
              <div className="w-1/2 px-2">
                <div className="relative w-full h-48 md:h-64">
                  <Image
                    src="/assets/AboutSection/image2.jpg"
                    alt="Music Image 2"
                    objectFit="cover"
                    className="rounded"
                    width={300}
                    height={300}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gap */}
      <div className="h-12 md:h-24"></div>

      {/* Second Container: Upcoming Tour */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Column: Images */}
          <div className="w-full md:w-6/12 mb-8 md:mb-0">
            <div className="flex flex-wrap -mx-2">
              <div className="w-1/2 px-2">
                <div className="relative w-full h-48 md:h-64">
                  <Image
                    src="/assets/AboutSection/image3.jpg"
                    alt="Music Image 3"
                    objectFit="cover"
                    className="rounded"
                    width={300}
                    height={300}
                  />
                </div>
              </div>
              <div className="w-1/2 px-2">
                <div className="relative w-full h-48 md:h-64">
                  <Image
                    src="/assets/AboutSection/image4.jpg"
                    alt="Music Image 4"
                    objectFit="cover"
                    className="rounded"
                    width={300}
                    height={300}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Tour Info */}
          <div className="w-full md:w-5/12 md:ml-4 text-center">
            <h1 className="text-4xl font-semibold uppercase mb-2">
              Upcoming Tour
            </h1>
            <p className="mb-4">
              1170 W 7th Ave
              <br /> Vancouver, BC
            </p>
            {/* <h4 className="text-xl font-semibold uppercase mb-2">Location</h4>
            <p className="mb-4">
              July 23 2025
            </p>
            <Link
              href="#"
              className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.514 0-10-4.486-10-10S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm-1-15h2v4h4v2h-4v4h-2v-4H7v-2h4V7z" />
              </svg>
              Buy a Ticket
            </Link> */}
          </div>
        </div>
      </div>

      {/* Third Container: Purchase Music */}
      <div className="container mx-auto px-4 mt-12">
      <div className="flex justify-center">
        <div className="w-full md:w-10/12 lg:w-9/12 text-center">
          <h4 className="text-xl font-semibold uppercase mb-4">
            Purchase Music
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
    </section>
  );
};

export default AboutSection;