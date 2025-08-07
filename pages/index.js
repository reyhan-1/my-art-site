import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import SubscribeSection from "@/components/SubscribeSection";

export default function Home() {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    // Show black screen initially for 1 second, then show video
    const timer = setTimeout(() => setShowVideo(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Reyhan Uyanık</title>
      </Head>

      <div className="min-h-screen w-full relative overflow-hidden">
        {/* Show black screen for 1 sec before video loads */}
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
      </div>

      <SubscribeSection />
    </>
  );
}
