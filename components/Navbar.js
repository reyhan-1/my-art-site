'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const backgrounds = [
  '/welcome8.jpg',
  '/welcome2.JPG',
  '/welcome5.JPG',
  '/welcome9.JPG',
  '/welcome10.JPG',
];

export default function Originals() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loaded, setLoaded] = useState({}); // Track loaded images to avoid flicker

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % backgrounds.length);
    }, 5000); // slower transition for better viewing
    return () => clearInterval(interval);
  }, []);

  // Mark images loaded on load
  const handleLoad = (src) => {
    setLoaded(prev => ({ ...prev, [src]: true }));
  };

  return (
    <div className="relative min-h-screen overflow-hidden scroll-mt-24">
      {backgrounds.map((src, i) => (
        <motion.div
          key={src}
          initial={{ opacity: 0 }}
          animate={{ opacity: i === currentIndex ? 1 : 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0"
          style={{ willChange: 'opacity' }}
        >
          <Image
            src={src}
            alt=""
            fill
            style={{ objectFit: 'cover' }}
            priority={i === currentIndex || loaded[src] ? true : false}
            onLoadingComplete={() => handleLoad(src)}
            quality={90}
          />
          {/* Optional overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-30 pointer-events-none" />
        </motion.div>
      ))}

      {/* Your hero content here */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen max-w-3xl mx-auto p-8 text-center text-primary-content">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-italiana">
          Welcome to My Painting Collection
        </h1>

        <p className="text-lg md:text-xl italic font-bold mb-4 font-fuzzy">
          “Medicine, law, business, engineering, these are all noble pursuits, and
          necessary to sustain life. But poetry, beauty, romance, love, these are what we stay alive for.”
        </p>

        <p className="text-md md:text-lg font-semibold font-mont text-secondary italic text-right w-full">
          — Dead Poet’s Society
        </p>
      </div>

      {/* Rest of your page content */}
    </div>
  );
}
