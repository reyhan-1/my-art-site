'use client';

import { useRouter } from "next/router";
import artworks from "@/data/artworks";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { motion } from "framer-motion";

export default function PaintingDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const { addToCart } = useCart();

  const painting = artworks.find((art) => art.slug === slug);

  if (!painting) return <p className="p-10">Painting not found.</p>;

  const handlePurchase = () => {
    addToCart(painting);
    console.log('Added to cart', painting);
    alert(`${painting.title} has been added to the cart!`);
  };

  const handleGoBack = () => {
    router.back();
  };

  return (
    <motion.div
      className="flex flex-col gap-8 px-6 md:px-20 pt-24 pb-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Go Back Button */}
      <motion.button
        onClick={handleGoBack}
        className="btn btn-ghost w-fit"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        ← Go Back
      </motion.button>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left side - Image */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src={painting.images[0]?.url || "/welcome.jpg"}
            alt={painting.images[0]?.alt || painting.title}
            layout="responsive"
            width={500}
            height={300}
            className="w-full rounded-xl shadow-lg"
          />
        </motion.div>

        {/* Right side - Info */}
        <motion.div
          className="flex-1 flex items-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">{painting.title}</h1>
            <p className="text-lg">{painting.description}</p>
            <p className="text-lg">{painting.dimension}</p>
            {painting.sold ? (
              <div className="badge badge-error text-lg p-3">Sold</div>
            ) : (
              <div className="badge badge-primary text-lg p-3">Available to Purchase</div>
            )}
            {/* Uncomment if needed */}
            {/* {!painting.sold && (
              <motion.button
                className="btn btn-primary mt-4"
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                onClick={handlePurchase}
              >
                Purchase
              </motion.button>
            )} */}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
