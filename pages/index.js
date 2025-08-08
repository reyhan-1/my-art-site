'use client';
import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

export default function Home() {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    setShowVideo(true);
  }, []);

  return (
    <>
      <Head>
        <title>Reyhan Uyanık</title>
      </Head>

      <motion.div
        className="min-h-screen w-full relative overflow-hidden bg-black motion-preset-fade motion-duration-2000"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 2 }}
      >
        {!showVideo && (
          <div className="absolute inset-0 bg-black z-20"></div>
        )}

        {/* Video background */}
        {showVideo && (
          <video
            ref={videoRef}
            className="absolute top-0 left-0 w-full h-full object-cover"
            src="/background.webm"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
        )}

        {/* Overlay for darkening */}
        <div className="absolute inset-0 bg-black/30 z-10"></div>

        {/* Quote content */}
        <div className="absolute bottom-24 right-12 z-30 max-w-xl text-right px-4">
          <blockquote className="text-white text-lg md:text-xl italic font-quicksand">
            “Medicine, law, business, engineering, these are all noble pursuits, and
            necessary to sustain life. But poetry, beauty, romance, love, these are what we stay alive for.”
          </blockquote>
          <p className="text-white text-md md:text-lg font-semibold mt-2 font-urbanist">
            — Dead Poet’s Society
          </p>
        </div>
      </motion.div>
    </>
  );
}
