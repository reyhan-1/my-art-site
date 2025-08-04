import Link from "next/link";
import artworks from "@/data/artworks";
import { motion } from "framer-motion";
import Image from 'next/image';
import Head from "next/head";

export default function Originals() {
  return (
    <>
      <Head>
        <title>Originals | Reyhan Uyanık</title>
      </Head>

      <div className="p-10">
        <h1 className="text-primary-content text-4xl font-italiana text-center text-baseline-content mb-6">
          Original Paintings
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-0 items-center">
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
                      src={art.images[0].url}
                      alt={art.images[0].alt}
                      layout="responsive"
                      width={600}
                      height={400}
                      className="object-cover rounded-t-lg"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{art.title}</h2>
                    {art.sold && <div className="badge badge-error">Sold</div>}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
