import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaPlayCircle,
  FaPauseCircle,
  FaMusic,
  FaDownload,
  FaShoppingCart,
  FaApple,
  FaGooglePlay,
  FaAmazon,
  FaSoundcloud,
  FaSpotify,
  FaYoutube,
} from "react-icons/fa";

const AudioFiles = () => {
  // State for audio playback
  const [playingTrack, setPlayingTrack] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  // State for toggling lyrics
  const [showLyrics, setShowLyrics] = useState({});

  // Tracklist data
  const tracklist = [
    {
      name: "Love Alive",
      artist: "Limitless",
      audioSrc: "https://freesound.org/data/previews/155/155373_2718887-lq.mp3",
      hasLyrics: false,
      hasPurchase: false,
      downloadLink: "#",
      purchaseLink: "#",
    },
    {
      name: "Hope",
      artist: "Limitless",
      audioSrc: "https://freesound.org/data/previews/33/33366_35187-lq.mp3",
      hasLyrics: true,
      hasPurchase: true,
      downloadLink: "#",
      purchaseLink: "#",
      lyrics: `
        Liberian girl
        You came and you changed my world
        A love so brand new
        Liberian girl
        You came and you changed my world
        A feeling so true

        Liberian girl
        You know that you came
        And you changed my world
        Just like in the movies
        With two lovers in a scene
        And she says "Do you love me"
        And he says so endlessly
        "I love you, Liberian girl"

        Liberian girl
        More precious than any pearl
        Your love so complete
        Liberian girl
        You kiss me then, Ooh, the world
        You do this to me
        Liberian girl
        You know that you came
        And you changed my world
        Just like in the movies
        With two lovers in a scene
        And she says "Do you love me"
        And he says so endlessly
        "I love you, Liberian girl"

        Liberian girl
        You know that you came
        And you changed my world
        I wait for the day
        When you have to say "I do"…
      `,
    },
    {
      name: "Bounce Out",
      artist: "Limitless",
      audioSrc: "https://freesound.org/data/previews/132/132258_2354337-lq.mp3",
      hasLyrics: false,
      hasPurchase: false,
      downloadLink: "#",
      purchaseLink: "#",
    },
    {
      name: "Girls Are the Same",
      artist: "Limitless",
      audioSrc: "https://freesound.org/data/previews/155/155374_2718887-lq.mp3",
      hasLyrics: false,
      hasPurchase: false,
      downloadLink: "#",
      purchaseLink: "#",
    },
    {
      name: "My Queen",
      artist: "Limitless",
      audioSrc: "https://freesound.org/data/previews/132/132259_2354337-lq.mp3",
      hasLyrics: true,
      hasPurchase: true,
      downloadLink: "#",
      purchaseLink: "#",
      lyrics: `
        Liberian girl
        You came and you changed my world
        A love so brand new
        Liberian girl
        You came and you changed my world
        A feeling so true

        Liberian girl
        You know that you came
        And you changed my world
        Just like in the movies
        With two lovers in a scene
        And she says "Do you love me"
        And he says so endlessly
        "I love you, Liberian girl"

        Liberian girl
        More precious than any pearl
        Your love so complete
        Liberian girl
        You kiss me then, Ooh, the world
        You do this to me
        Liberian girl
        You know that you came
        And you changed my world
        Just like in the movies
        With two lovers in a scene
        And she says "Do you love me"
        And he says so endlessly
        "I love you, Liberian girl"

        Liberian girl
        You know that you came
        And you changed my world
        I wait for the day
        When you have to say "I do"…
      `,
    },
    {
      name: "Falling Apart",
      artist: "Limitless",
      audioSrc: "https://freesound.org/data/previews/155/155375_2718887-lq.mp3",
      hasLyrics: false,
      hasPurchase: true,
      downloadLink: "#",
      purchaseLink: "#",
    },
  ];

  // Social media platforms
  const socialPlatforms = [
    { href: "#", icon: <FaApple className="text-2xl" />, label: "Apple" },
    { href: "#", icon: <FaGooglePlay className="text-2xl" />, label: "Google Play" },
    { href: "#", icon: <FaAmazon className="text-2xl" />, label: "Amazon" },
    { href: "#", icon: <FaSoundcloud className="text-2xl" />, label: "SoundCloud" },
    { href: "#", icon: <FaSpotify className="text-2xl" />, label: "Spotify" },
    { href: "#", icon: <FaYoutube className="text-2xl" />, label: "YouTube" },
  ];

  // Handle play/pause
  const handlePlayPause = (track) => {
    if (playingTrack === track.name) {
      audioRef.current.pause();
      setPlayingTrack(null);
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      audioRef.current = new Audio(track.audioSrc);
      audioRef.current.play().catch((error) => {
        console.error("Audio playback failed:", error);
      });
      setPlayingTrack(track.name);

      // Update duration and current time
      audioRef.current.onloadedmetadata = () => {
        setDuration(audioRef.current.duration);
      };
      audioRef.current.ontimeupdate = () => {
        setCurrentTime(audioRef.current.currentTime);
      };
    }
  };

  // Format time (mm:ss)
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  // Toggle lyrics visibility
  const toggleLyrics = (trackName) => {
    setShowLyrics((prev) => ({
      ...prev,
      [trackName]: !prev[trackName],
    }));
  };

  return (


    <section className="bg-black text-white py-12 border-b border-gray-700">
      {/* First Container: Title */}
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="w-full md:w-10/12 lg:w-9/12 text-center mb-12">
            <div className="block-title">
              <div className="block-bars mb-4">
                {/* <Image
                  src="https://placehold.co/80x40/000000/FFFFFF/png?text=Sound+Bars"
                  alt="Sound Bars"
                  width={80}
                  height={40}
                  className="mx-auto"
                /> */}
              </div>
              <h6 className="font-montserrat text-sm uppercase mb-1">
                Released Album
              </h6>
              <h1 className="font-bebas text-4xl md:text-5xl uppercase mb-0">
                Latest Album
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Second Container: Album Info */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-8/12 w-full">
            <Image
              src="/assets/Discography/image1.jpg"
              alt="Vinyl"
              width={500}
              height={500}
              className="w-[500px] h-auto mb-0"
            />
          </div>
          <div className="lg:w-3/12 w-full lg:ml-4 mt-6 lg:mt-0">
            <div className="block-content">
              <div className="block-album-info">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <h5 className="font-montserrat uppercase text-lg mr-2">
                      Label:
                    </h5>
                    <span className="font-montserrat">Limitless</span>
                  </li>
                  <li className="flex items-center">
                    <h5 className="font-montserrat uppercase text-lg mr-2">
                      Released:
                    </h5>
                    <span className="font-montserrat">March 23/3/18</span>
                  </li>
                  <li className="flex items-center">
                    <h5 className="font-montserrat uppercase text-lg mr-2">
                      Genre:
                    </h5>
                    <span className="font-montserrat">Pop/Rock/Techno</span>
                  </li>
                  <li className="flex items-center">
                    <h5 className="font-montserrat uppercase text-lg mr-2">
                      Styles:
                    </h5>
                    <span className="font-montserrat">Revival/Indie Rock</span>
                  </li>
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

      {/* Third Container: Tracklist */}
      <div className="container mx-auto px-4 mt-12">
        <div className="flex justify-center">
          <div className="w-full lg:w-9/12 md:w-12/12">
            <div className="block-tracklist">
              {/* Audio Player */}
              <div className="audiojs bg-gray-800 p-4 rounded flex items-center space-x-4 mb-4">
                <button
                  onClick={() => {
                    if (playingTrack) {
                      const currentTrack = tracklist.find(
                        (track) => track.name === playingTrack
                      );
                      handlePlayPause(currentTrack);
                    }
                  }}
                  className="focus:outline-none"
                  aria-label={playingTrack ? "Pause" : "Play"}
                >
                  {playingTrack ? (
                    <FaPauseCircle className="text-2xl text-white" />
                  ) : (
                    <FaPlayCircle className="text-2xl text-white" />
                  )}
                </button>
                <div className="scrubber flex-1 h-2 bg-gray-600 rounded relative">
                  <div
                    className="progress h-full bg-purple-600 rounded"
                    style={{
                      width: duration ? `${(currentTime / duration) * 100}%` : "0%",
                    }}
                  ></div>
                </div>
                <div className="time text-sm">
                  <span className="played">{formatTime(currentTime)}</span>/
                  <span className="duration">{formatTime(duration)}</span>
                </div>
              </div>

              {/* Tracklist */}
              <ol className="playlist space-y-4">
                {tracklist.map((track, index) => (
                  <li
                    key={index}
                    className={`${
                      playingTrack === track.name ? "playing" : ""
                    } pause`}
                  >
                    <div className="as-link">
                      <div className="flex flex-col md:flex-row md:items-center justify-between py-3 border-b border-gray-700 last:border-b-0 hover:bg-gray-700 transition-colors">
                        <div className="md:w-6/12 w-full flex items-center space-x-4 pl-5">
                          <button
                            onClick={() => handlePlayPause(track)}
                            className="focus:outline-none"
                            aria-label={
                              playingTrack === track.name ? "Pause" : "Play"
                            }
                          >
                            {playingTrack === track.name ? (
                              <FaPauseCircle className="text-2xl text-white hover:text-gray-300 transition-colors" />
                            ) : (
                              <FaPlayCircle className="text-2xl text-gray-500 hover:text-white transition-colors" />
                            )}
                          </button>
                          <div>
                            <h5 className="font-bebas text-lg uppercase text-white mb-0">
                              {track.name}
                            </h5>
                            <span className="font-montserrat text-sm text-gray-400">
                              {track.artist}
                            </span>
                          </div>
                        </div>
                        <div className="md:w-6/12 w-full flex justify-end space-x-3 mt-3 md:mt-0 pr-5">
                          {track.hasLyrics && (
                            <button
                              onClick={() => toggleLyrics(track.name)}
                              className="flex items-center space-x-1 bg-black text-white px-3 py-1 rounded border border-gray-600 hover:bg-gray-800 transition-colors"
                              aria-label="Toggle Lyrics"
                            >
                              <FaMusic className="text-sm" />
                              <span className="font-montserrat text-sm uppercase">
                                Lyrics
                              </span>
                            </button>
                          )}
                          <Link
                            href={track.downloadLink}
                            className="flex items-center space-x-1 bg-black text-white px-3 py-1 rounded border border-gray-600 hover:bg-gray-800 transition-colors"
                            aria-label="Download Track"
                          >
                            <FaDownload className="text-sm" />
                            <span className="font-montserrat text-sm uppercase">
                              Download
                            </span>
                          </Link>
                          {track.hasPurchase && (
                            <Link
                              href={track.purchaseLink}
                              className="flex items-center space-x-1 bg-black text-white px-3 py-1 rounded border border-gray-600 hover:bg-gray-800 transition-colors"
                              aria-label="Purchase Track"
                            >
                              <FaShoppingCart className="text-sm" />
                              <span className="font-montserrat text-sm uppercase">
                                Purchase
                              </span>
                            </Link>
                          )}
                        </div>
                      </div>
                      {track.hasLyrics && showLyrics[track.name] && (
                        <div className="block-lyrics w-3/4 mx-auto text-center mt-3 p-4 bg-gray-900 rounded">
                          <h3 className="font-bebas text-xl uppercase mb-4">
                            {track.name}
                          </h3>
                          <p className="font-montserrat text-sm whitespace-pre-line">
                            {track.lyrics}
                          </p>
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudioFiles;