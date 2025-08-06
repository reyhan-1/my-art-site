import { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from "next/head";

export default function Home() {
  const backgrounds = [
    '/welcome8.avif',
    '/welcome2.avif',
    '/welcome5.avif',
  ];

  const [currentBackground, setCurrentBackground] = useState(backgrounds[0]);

  // Preload images and set background every 10s
  useEffect(() => {
    // Preload all backgrounds
    backgrounds.forEach((bg) => {
      const img = new Image();
      img.src = bg;
    });

    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * backgrounds.length);
      setCurrentBackground(backgrounds[randomIndex]);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>Reyhan Uyanık</title>
        {backgrounds.map((bg, i) => (
          <link key={i} rel="preload" as="image" href={bg} type="image/avif" />
        ))}
      </Head>

      <div
        className="hero min-h-screen relative transition-opacity duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${currentBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Main content */}
        <div className="relative z-10 text-center px-4 md:px-8 py-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-8 text-primary-content font-italiana drop-shadow-lg">
            Welcome to My Painting Collection
          </h1>

          <blockquote className="text-lg md:text-xl italic font-medium text-primary-content max-w-3xl mx-auto mb-6">
            “Medicine, law, business, engineering, these are all noble pursuits, and
            necessary to sustain life. But poetry, beauty, romance, love, these are what we stay alive for.”
          </blockquote>

          <p className="text-md md:text-lg font-semibold text-primary-content text-right max-w-3xl mx-auto">
            — <span className="text-secondary font-shadows-into-light italic">Dead Poet’s Society</span>
          </p>
        </div>
      </div>
    </>
  );
}
