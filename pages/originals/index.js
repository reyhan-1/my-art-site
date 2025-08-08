import { useState, useEffect } from "react";
import Link from "next/link";
import artworks from "@/data/artworks";
import Image from "next/image";
import Head from "next/head";

export default function Originals() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <Head>
        <title>Originals | Reyhan Uyanık</title>
      </Head>

      <div className="px-6 md:px-10 py-16 bg-white">
        <h2 className="text-4xl text-center font-serif m-10">
          Original Paintings
        </h2>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {isClient &&
            artworks.map((art, index) => (
              <div
                key={art.slug}
                className="opacity-0 animate-fade-in"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: "forwards",
                }}
              >
                <Link
                  href={`/originals/${art.slug}`}
                  prefetch
                  className="block overflow-hidden shadow-sm transition-shadow duration-300 hover:shadow-md"
                >
                  <figure className="relative w-full h-80">
                    <Image
                      src={art.images[0].url}
                      alt={art.images[0].alt}
                      width={400}
                      height={320}
                      className="object-cover"
                      priority={index < 4}
                      loading={index < 4 ? "eager" : "lazy"}
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
              </div>
            ))}
        </section>
      </div>
    </>
  );
}
