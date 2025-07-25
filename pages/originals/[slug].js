'use client';
import { useRouter } from "next/router";
import artworks from "@/data/artworks";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";

export default function PaintingDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const { addToCart } = useCart();

  const painting = artworks.find((art) => art.slug === slug);

  const [currentSlide, setCurrentSlide] = useState(0);

  // Ref for thumbnails container to scroll programmatically
  const thumbnailsRef = useRef(null);

  if (!painting) return <p className="p-10">Painting not found.</p>;

  const totalSlides = painting.images.length;

  const handlePurchase = () => {
    addToCart(painting);
    alert(`${painting.title} has been added to the cart!`);
  };

  const handleGoBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/originals#gallery');
    }
  };

  const goPrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  // Scroll thumbnails container left or right by fixed amount
  const scrollThumbnails = (direction) => {
    if (!thumbnailsRef.current) return;
    const scrollAmount = 150; // Adjust as needed
    if (direction === "left") {
      thumbnailsRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      thumbnailsRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <motion.div
      className="flex flex-col gap-8 px-4 pt-24 pb-24 max-w-6xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Go Back Button */}
      <motion.button
        onClick={handleGoBack}
        className="btn btn-ghost w-fit font-mont"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        ← Go Back
      </motion.button>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left side - Image + gallery */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Fixed height container to prevent layout jumps */}
          <div className="relative w-full rounded-lg shadow-lg overflow-hidden" style={{ height: 480 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                <Image
                  src={painting.images[currentSlide].url || "/welcome.jpg"}
                  alt={painting.images[currentSlide].alt || painting.title}
                  fill
                  style={{ objectFit: "contain" }}
                  priority={true}
                />
              </motion.div>
            </AnimatePresence>

            {/* Prev/Next buttons on main image */}
            {totalSlides > 1 && (
              <>
                <button
                  onClick={goPrev}
                  aria-label="Previous slide"
                  className="absolute left-4 top-1/2 -translate-y-1/2 btn btn-circle bg-white/80 text-black hover:bg-white"
                  style={{ zIndex: 10 }}
                >
                  ❮
                </button>

                <button
                  onClick={goNext}
                  aria-label="Next slide"
                  className="absolute right-4 top-1/2 -translate-y-1/2 btn btn-circle bg-white/80 text-black hover:bg-white"
                  style={{ zIndex: 10 }}
                >
                  ❯
                </button>
              </>
            )}
          </div>

{/* Thumbnail gallery */}
{totalSlides > 1 && (
  <div className="mt-4">
    <div
      ref={thumbnailsRef}
      className="flex justify-center space-x-4 overflow-x-auto scrollbar-hide px-4"
      style={{ scrollBehavior: "smooth" }}
    >
      {painting.images.map((img, i) => (
        <button
          key={i}
          onClick={() => setCurrentSlide(i)}
          className={`flex-shrink-0 rounded-lg border-4 ${
            i === currentSlide
              ? "border-primary"
              : "border-transparent hover:border-gray-300"
          }`}
          style={{ width: 100, height: 60, position: "relative" }}
          aria-label={`Select slide ${i + 1}`}
        >
          <Image
            src={img.url}
            alt={img.alt || painting.title}
            fill
            style={{ objectFit: "cover", borderRadius: 8 }}
            sizes="100px"
          />
        </button>
      ))}
    </div>
  </div>
)}
        </motion.div>

        {/* Right side - Info */}
        <motion.div
          className="flex-1 flex items-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-6 text-base-content">
            <h1 className="text-3xl font-bold font-italiana">{painting.title}</h1>
            <p className="text-lg font-mont">{painting.dimension}{' | '}{painting.description}</p>
            {painting.sold ? (
              <div className="badge badge-error  font-italiana font-bold  text-lg p-3">Sold</div>
            ) : (
              <>
                <div className="badge badge-primary font-italiana font-bold text-lg p-3">
                  Available to Purchase
                </div>
                <p className="font-mont"> If you’re interested in purchasing, feel free to email me. I’ll provide shipping details and delivery options based on your location.
                </p>
                {/* Uncomment if you want purchase button */}
                {/* <motion.button
                  className="btn btn-primary mt-4"
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.05 }}
                  onClick={handlePurchase}
                >
                  Purchase
                </motion.button> */}
              </>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
