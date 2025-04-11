import Link from "next/link";
import artworks from "@/data/artworks";
import { motion } from "framer-motion";
import Image from 'next/image';

export default function Originals() {
  return (
    <div className="p-10">
      <h1 className="text-primary-content text-4xl font-bold text-center text-gray-900 mb-12">Original Paintings</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
