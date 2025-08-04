import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import artworks from "@/data/artworks";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { useState } from "react";
import Head from "next/head";

export default function PaintingDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const { addToCart } = useCart();
  const painting = artworks.find((art) => art.slug === slug);

  const [selectedImage, setSelectedImage] = useState(0); // Featured image index


  if (!painting) return <p className="p-10">Painting not found.</p>;

  const totalSlides = painting.images.length;

  const handleGoBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/originals#gallery');
    }
  };

  const handlePurchase = () => {
    addToCart(painting);
    console.log("Added to cart", painting);
    alert(`${painting.title} has been added to the cart!`);
  };

  return (
          <>
      <Head>
        <title>{painting.title} | Reyhan Uyanık</title>
      </Head>
    <div className="p-10 flex flex-col lg:flex-row gap-8">
              {/* Go Back Button */}
      <button
        onClick={handleGoBack}
        className="btn btn-ghost w-fit font-mont"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        ← Go Back
      </button>
      {/* Left - Gallery */}
      <div className="flex-1">
        <div className="grid gap-4">
          {/* Featured image with fixed height */}
<div className="relative w-full h-[700px] rounded-lg overflow-hidden shadow-lg bg-base-200">
  <Image
    src={painting.images[selectedImage].url}
    alt={painting.images[selectedImage].alt}
    fill
    className="object-contain"
  />
</div>

          {/* Thumbnails */}
          <div className="grid grid-cols-5 gap-4 justify-center">
            {painting.images.map((img, i) => (
              <div
                key={i}
                onClick={() => setSelectedImage(i)}
                className={`cursor-pointer relative rounded-lg overflow-hidden ${
                  i === selectedImage ? "ring-4 ring-primary" : ""
                }`}
              >
                <Image
                  src={img.url}
                  alt={img.alt}
                  width={150}
                  height={150}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right - Info */}
      <div className="flex-1 flex items-center justify-center">
        <div className="space-y-4 max-w-md">
           <h1 className="text-3xl font-bold font-italiana">{painting.title}</h1>
            <p className="text-lg font-mont">
              {painting.dimension}{" | "}{painting.description}
            </p>
          {painting.sold ? (
            <div className="badge badge-error text-lg p-3">Sold</div>
          ) : (
              <p> If you’re interested in purchasing, feel free to email me. I’ll provide shipping details and delivery options based on your location.</p>
            // <button className="btn btn-primary" onClick={handlePurchase}>
            //   Purchase
            // </button>
          )}
        </div>
      </div>
    </div>
                  </>
  );
}
