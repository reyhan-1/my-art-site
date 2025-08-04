import { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from "next/head";

export default function Home() {
  // Array of background images
  const backgrounds = [
    '/welcome8.avif',
    '/welcome9.avif',
    '/welcome2.avif',
    '/welcome10.avif',
    '/welcome5.avif',
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
      <>
        <Head>
        <title> Reyhan Uyanık</title>
      </Head>
    <div
      className="hero min-h-screen relative"
      style={{
        backgroundImage: `url(${currentBackground})`,
        backgroundSize: 'cover', // Ensure background image covers the hero area
        backgroundPosition: 'center', // Center the background image
      }}
    >{/* Main content */}
<div className="relative z-10 text-center px-4 md:px-8 py-12">
  <h1 className="text-3xl md:text-5xl font-bold mb-8 text-primary-content font-italiana drop-shadow-lg">
    Welcome to My Painting Collection
  </h1>

  <blockquote className="text-lg md:text-xl italic font-medium text-primary-content max-w-3xl mx-auto mb-6">
    “Medicine, law, business, engineering, these are all noble pursuits, and
necessary to sustain life. But poetry, beauty, romance, love, these are what we stay alive for.”
  </blockquote>

  <p className="text-md md:text-lg font-semibold text-primary-content text-right max-w-3xl mx-auto">
    — <span className="text-secondary italic">Dead Poet’s Society</span>
  </p>
</div>

    </div>
      </>
  );
}
