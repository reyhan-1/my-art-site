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
        <h1 className=" text-4xl font-italiana text-center text-base-content mb-6">
          Original Paintings
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {artworks.map((art, index) => (
            <motion.div
              key={art.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link href={`/originals/${art.slug}`}>
                <div className="card card-compact card-border bg-base-100 shadow-lg hover:shadow-2xl font-italiana font-bold overflow-hidden"
>
                  <figure>
<Image
  src={art.images[0].url}
  alt={art.images[0].alt}
  width={600}
  height={400}
  className="object-cover rounded-t-lg"
  placeholder="blur"
  blurDataURL="/placeholder.png" // small placeholder image
  priority={index < 4} // Only preload the top few
  loading={index < 4 ? "eager" : "lazy"} // Lazy load the rest
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
