'use client';
import Link from "next/link";
import artworks from "@/data/artworks";
import { motion, AnimatePresence } from "framer-motion";
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
      <h6 className=" text-4xl text-center font-serif text-black m-10">Originals</h6>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
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
      className="overflow-hidden shadow-sm transition-shadow duration-300 hover:shadow-md"
    >
      <Link href={`/originals/${art.slug}`} prefetch className="block">
        <figure className="relative w-full h-80">
          <Image
            src={art.images[0].url}
            alt={art.images[0].alt}
            fill
            className="object-cover"
            priority={priority}
              loading={priority ? 'eager' : 'lazy'}
            onLoad={() => setLoaded(true)}
          />
        </figure>

        <div className="p-6">
          <h3 className="text-xl font-serif mb-2 text-gray-900">
            {art.title}
            {art.sold && (
              <span className="inline-block bg-blue-900 text-white text-xs font-semibold px-2 py-1 ml-4">
                Sold
              </span>
            )}
          </h3>
          <h2 className="text-l font-quicksand mb-2 text-gray-500">
            {art.description}
          </h2>
        </div>
      </Link>
    </motion.div>
  );
}
