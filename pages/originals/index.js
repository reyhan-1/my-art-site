'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";
import artworks from "@/data/artworks";

export default function Originals() {
  const backgrounds = [
    '/welcome8.jpg',
    '/welcome2.JPG',
    '/welcome5.JPG',
    '/welcome9.JPG',
    '/welcome10.JPG',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % backgrounds.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentBackground = backgrounds[currentIndex];

  return (
    <>
      <div className="hero min-h-screen relative scroll-mt-24 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentBackground}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${currentBackground})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              zIndex: 0,
            }}
          />
        </AnimatePresence>

        {/* Dark overlay to improve text readability */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-black bg-opacity-50"
          style={{ zIndex: 1 }}
        />

        <div className="relative z-10 text-center max-w-3xl mx-auto p-8 rounded-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary-content font-italiana">
            Welcome to My Painting Collection
          </h1>

          <p className="text-lg md:text-xl italic font-bold text-primary-content mb-4 font-fuzzy">
            “Medicine, law, business, engineering, these are all noble pursuits, and
            necessary to sustain life. But poetry, beauty, romance, love, these are what we stay alive for.”
          </p>

          <p className="text-md md:text-lg font-semibold text-primary-content font-mont text-right ">
            — <span className="text-secondary italic">Dead Poet’s Society</span>
          </p>
        </div>
      </div>

      <section
        className="min-h-[70vh] px-4 md:px-12 lg:px-16 bg-base-100 scroll-mt-20 max-w-screen-xl mx-auto"
        id="gallery"
      >
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="p-8 text-2xl md:text-3xl font-bold text-base-content">Originals</h3>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {artworks.map((artwork) => (
            <motion.div
              key={artwork.slug}
              whileHover={{ scale: 1.02 }}
              className="transition-transform duration-300 ease-in-out"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Link href={`/originals/${artwork.slug}`}>
                <div className="card card-compact card-border bg-base-100 shadow-lg hover:shadow-2xl
                 font-italiana font-bold overflow-hidden">
                  <figure className="relative w-full h-64">
                    <Image
                      src={artwork.images?.[0]?.url || "/placeholder.jpg"}
                      alt={artwork.images?.[0]?.alt || artwork.title}
                      fill
                      priority
                      quality={75}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                    {artwork.sold && (
                      <div className="badge badge-error">Sold</div>
                    )}
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{artwork.title}</h2>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
