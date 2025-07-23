'use client';

import Link from "next/link";
import artworks from "@/data/artworks";
import { motion } from "framer-motion";
import Image from 'next/image';
import { useEffect, useState } from "react";

export default function Originals() {
  const backgrounds = ['/welcome2.JPG', '/welcome5.JPG'];
  const [currentBackground, setCurrentBackground] = useState(backgrounds[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * backgrounds.length);
      setCurrentBackground(backgrounds[randomIndex]);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-10">
      {/* Hero with smooth background transition */}
      <div
        className="hero min-h-screen relative transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${currentBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'background-image 1s ease-in-out',
        }}
      >
        {/* Overlay for text contrast */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />

        <div className="relative z-10 text-center text-white">
          <h1 className="md:text-4xl font-bold mb-10">
              Welcome to My Painting Collection
          </h1>
        </div>
      </div>

      {/* Section Title */}
      <motion.div
        className="text-center space-y-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="p-8 text-2xl md:text-3xl font-bold text-base-content">Originals</h3>
      </motion.div>

      {/* Artwork Grid */}
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
              <div className="card card-compact card-border bg-base-100 shadow-lg hover:shadow-2xl overflow-hidden">
                <figure className="relative w-full h-64">
                  <Image
                    src={artwork.images?.[0]?.url || "/placeholder.jpg"}
                    alt={artwork.images?.[0]?.alt || artwork.title}
                    fill
                    className="object-cover"
                  />
                  {artwork.sold && (
                    <div className="badge badge-error">
                      Sold
                    </div>
                  )}
                </figure>
                <div className="card-body ">
                  <h2 className="card-title">{artwork.title}</h2>
                  {/*<p className="text-sm text-base-content">{artwork.dimension}</p>*/}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
