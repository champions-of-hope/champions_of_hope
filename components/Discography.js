import Image from "next/image";
import Link from "next/link";

const DiscographySection = () => {
  return (
    <section id="discography" className="relative bg-white text-black py-12">
      {/* Pattern Image (Background) */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/img/center-pattern.png"
          alt="Pattern"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
          // Removed width and height since layout="fill" is used
        />
      </div>

      {/* First Container: Title */}
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="w-full md:w-10/12 lg:w-9/12 text-center mb-12">
            <div className="block-title">
              
              <h6 className="text-sm uppercase mb-1">Life Discography</h6>
              <h1 className="text-4xl md:text-5xl font-bold uppercase mb-0">
                Discography
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Second Container: Album Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Album 1 */}
          <div className="block-content">
            <Link href="/album-single" className="group">
              <div className="block-album p-3 transition-transform group-hover:scale-105">
                <div className="relative w-full h-48">
                  <Image
                    src="/img/6.jpg"
                    alt="Limiteless Album"
                    layout="fill"
                    objectFit="cover"
                    className="rounded"
                    // Removed width and height since layout="fill" is used
                  />
                </div>
                <h4 className="text-lg uppercase mt-2 mb-0 text-center">
                  Limiteless
                </h4>
              </div>
            </Link>
          </div>

          {/* Album 2 */}
          <div className="block-content">
            <Link href="/album-single" className="group">
              <div className="block-album p-3 transition-transform group-hover:scale-105">
                <div className="relative w-full h-48">
                  <Image
                    src="/img/7.jpg"
                    alt="Set Me Free Album"
                    layout="fill"
                    objectFit="cover"
                    className="rounded"
                    // Removed width and height since layout="fill" is used
                  />
                </div>
                <h4 className="text-lg uppercase mt-2 mb-0 text-center">
                  Set Me Free
                </h4>
              </div>
            </Link>
          </div>

          {/* Album 3 */}
          <div className="block-content">
            <Link href="/album-single" className="group">
              <div className="block-album p-3 transition-transform group-hover:scale-105">
                <div className="relative w-full h-48">
                  <Image
                    src="/img/8.jpg"
                    alt="How It Feels Album"
                    layout="fill"
                    objectFit="cover"
                    className="rounded"
                    // Removed width and height since layout="fill" is used
                  />
                </div>
                <h4 className="text-lg uppercase mt-2 mb-0 text-center">
                  How It Feels
                </h4>
              </div>
            </Link>
          </div>

          {/* Album 4 */}
          <div className="block-content">
            <Link href="/album-single" className="group">
              <div className="block-album p-3 transition-transform group-hover:scale-105">
                <div className="relative w-full h-48">
                  <Image
                    src="/img/9.jpg"
                    alt="Tonight Album"
                    layout="fill"
                    objectFit="cover"
                    className="rounded"
                    // Removed width and height since layout="fill" is used
                  />
                </div>
                <h4 className="text-lg uppercase mt-2 mb-0 text-center">
                  Tonight
                </h4>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Third Container: Pre-Order Teaser */}
      <div className="container mx-auto px-4 mt-12">
        <div className="flex justify-center">
          <div className="w-full lg:w-8/12 md:w-10/12 text-center">
            <div className="block-teaser">
              <h2 className="text-2xl md:text-3xl font-bold mb-0">
                PRE-ORDER THE NEW ALBUM AND GET ACCESS TO
                <br /> THE PRE-SALE OF 'THE UPCOMING TOUR'
              </h2>
              <Link
                href="#"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded mt-4 hover:bg-blue-700 transition"
              >
                Learn More
              </Link>
            </div>
            <div className="block-presale mt-6">
              <ul className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-6">
                <li className="flex items-center">
                  <h4 className="text-lg uppercase mr-2">Pre-Sale Tour 1:</h4>
                  2/07 - 2/09
                </li>
                <li className="flex items-center">
                  <h4 className="text-lg uppercase mr-2">Pre-Sale Tour 2:</h4>
                  2/14 - 2/16
                </li>
                <li className="flex items-center">
                  <h4 className="text-lg uppercase mr-2">Pre-Sale Tour 3:</h4>
                  2/21 - 2/23
                </li>
              </ul>
              <p className="opacity-50 mt-2 mb-0">
                All pre-sales begin 12am local and end 6pm local time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscographySection;