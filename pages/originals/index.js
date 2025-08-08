'use client';
import Link from "next/link";
import artworks from "@/data/artworks";
import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";
import { useState } from "react";

export default function Originals() {
  return (
    <>
      <Head>
        <title>Originals | Reyhan Uyanık</title>
      </Head>

      <div className="px-6 md:px-10 py-16 bg-white font-black">
        <h6 className="text-4xl text-center font-serif text-black m-10">Originals</h6>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
          {artworks.map((art, index) => (
            <ImageWithFade
              key={art.slug}
              art={art}
              priority={index < 4}
            />
          ))}
        </section>
      </div>
    </>
  );
}

function ImageWithFade({ art, priority }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: loaded ? 1 : 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="relative overflow-hidden shadow-sm transition-shadow duration-300 group"
    >
      <Link href={`/originals/${art.slug}`} prefetch className="block">
          <figure className="relative w-full aspect-square">
              <Image
                  src={art.images[0].url}
                  alt={art.images[0].alt}
                  fill
                  className="object-cover"
                  priority={priority}
                  loading={priority ? 'eager' : 'lazy'}
                  onLoad={() => setLoaded(true)}
              />
  {art.sold && (
    <span className="absolute top-6 left-6 bg-white text-black text-xs font-serif px-8 py-4 tracking-wide z-10 shadow">
      Sold
    </span>
  )}
</figure>

        {/* Info container - hidden by default, shown on hover */}
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center">
          <h3 className="text-base font-serif mb-2 text-black">
            {art.title}
          </h3>
          <h2 className="text-sm font-urbanist mb-2 text-gray-600">
            {art.description}
          </h2>
        </div>
      </Link>
    </motion.div>
  );
}
