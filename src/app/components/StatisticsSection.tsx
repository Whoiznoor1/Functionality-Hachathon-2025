"use client";
import { useRef, useState } from "react";

const StatisticsSection = () => {
  // Creating a reference to the video element
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // State to toggle play/pause button visibility
  const [isPlaying, setIsPlaying] = useState(false);

  // Handle play/pause functionality
  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause(); // Pause the video
      } else {
        videoRef.current.play(); // Play the video
      }
      setIsPlaying(!isPlaying); // Toggle the play/pause state
    }
  };

  // Event handler to hide the button when video is playing
  const handlePlay = () => {
    setIsPlaying(true); // Set to playing
  };

  // Event handler to show the button when video is paused
  const handlePause = () => {
    setIsPlaying(false); // Set to paused
  };

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Centering the title and description for small screens */}
        <div className="mb-10 grid grid-cols-1 sm:grid-cols-2 text-center sm:text-left">
          <span className="flex items-center flex-col">
            <h2 className="text-sm text-red-600 font-semibold mb-2 gap-3">
              Problems trying
            </h2>
            <h3 className="text-2xl font-bold mb-4">
              Met minim Mollie non
              <br className="sm:hidden" />
              desert Alamo est sit
              <br className="sm:hidden" />
              cliquey dolor do met
              <br className="sm:hidden" />
              sent.
            </h3>
          </span>
          <p className="text-gray-600">
            Problems trying to resolve the conflict between
            <br className="sm:hidden" />
            the two major realms of <br className="hidden sm:block" />
            Classical physics:
            <br className="sm:hidden" />
            Newtonian mechanics.
          </p>
        </div>

        {/* Centering the statistics for small screens with grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <h4 className="text-4xl font-bold text-gray-800">15K</h4>
            <p className="text-gray-600">Happy Customers</p>
          </div>
          <div className="text-center">
            <h4 className="text-4xl font-bold text-gray-800">150K</h4>
            <p className="text-gray-600">Monthly Visitors</p>
          </div>
          <div className="text-center">
            <h4 className="text-4xl font-bold text-gray-800">15</h4>
            <p className="text-gray-600">Countries Worldwide</p>
          </div>
          <div className="text-center">
            <h4 className="text-4xl font-bold text-gray-800">100+</h4>
            <p className="text-gray-600">Top Partners</p>
          </div>
        </div>

        {/* Centering the video and button for small screens */}
        <div className="relative">
          <video
            ref={videoRef} // Reference to the video element
            width="100%" // You can control the width and height
            height="auto"
            controls
            onPlay={handlePlay} // Hide button on play
            onPause={handlePause} // Show button on pause
          >
            <source src="/vedio.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Play/Pause button on top of the video */}
          {!isPlaying && (
            <button
              onClick={handlePlayPause} // Handle play/pause when clicked
              className="absolute inset-0 flex items-center justify-center text-white bg-opacity-75 rounded-lg focus:outline-none"
              aria-label="Play Video"
            >
              <svg
                width="93"
                height="93"
                viewBox="0 0 93 93"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="92.6" height="92.6" rx="46.3" fill="#23A6F0" />
                <g clipPath="url(#clip0_10053_170)">
                  <path
                    d="M54.5396 47.7028L39.4282 56.7265C38.1458 57.4915 36.5 56.5652 36.5 55.0229V36.9757C36.5 35.4359 38.1434 34.5071 39.4282 35.2746L54.5396 44.2982C54.8313 44.4696 55.0738 44.7173 55.2425 45.0163C55.4112 45.3153 55.5 45.6548 55.5 46.0005C55.5 46.3462 55.4112 46.6858 55.2425 46.9848C55.0738 47.2837 54.8313 47.5315 54.5396 47.7028Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_10053_170">
                    <rect
                      width="19"
                      height="23"
                      fill="white"
                      transform="translate(36.7998 34.7998)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
