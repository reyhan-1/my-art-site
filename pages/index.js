import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  // Array of background images
  const backgrounds = [
    '/2.jpg',
    '/5.jpg',
    '/6.jpg',
  ];

  // State to track the current background
  const [currentBackground, setCurrentBackground] = useState(backgrounds[0]);

  // Set up effect to change background every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * backgrounds.length);
      setCurrentBackground(backgrounds[randomIndex]); // Change background image
    }, 10000); // Change every 10 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div
      className="hero min-h-screen relative"
      style={{
        backgroundImage: `url(${currentBackground})`,
        backgroundSize: 'cover', // Ensure background image covers the hero area
        backgroundPosition: 'center', // Center the background image
      }}
    >
      {/* Main content */}
      <div className="relative z-10 text-center">
        <h1 className=" md:text-4xl font-bold mb-10 text-white text-primary-content font-shadows-into-light">
          Welcome to My Painting Collection
        </h1>

      </div>
    </div>
  );
}
