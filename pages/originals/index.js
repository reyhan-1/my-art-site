import Link from "next/link";
import artworks from "@/data/artworks";
import { motion } from "framer-motion";
import Image from 'next/image';
import {useEffect, useState} from "react";

export default function Originals() {
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
    <div className="p-10">
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
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {artworks.map((art, index) => (
          <motion.div
            key={art.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Link href={`/originals/${art.slug}`}>
              <div className="card bg-base-100 shadow-xl hover:scale-105 transition-transform cursor-pointer">
                <figure>
                  <Image
                    src={art.image}
                    alt={art.title}
                    layout="responsive"  // Maintains the image's natural aspect ratio
                    width={600}         // Provide a width for the image (based on its natural size)
                    height={400}        // Provide a height for the image (based on its natural size)
                    className="h-60 w-full object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{art.title}</h2>
                  <p>{art.price}</p>
                  {art.sold && <div className="badge badge-error">Sold Out</div>}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>

  );
}
