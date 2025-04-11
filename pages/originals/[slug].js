import { useRouter } from "next/router";
import artworks from "@/data/artworks";
import { useCart } from "@/context/CartContext"; // Import useCart

export default function PaintingDetail() {
  const router = useRouter();
  const { slug } = router.query;  // The slug is now dynamically pulled from the URL
  const { addToCart } = useCart(); // Get addToCart from context

  const painting = artworks.find((art) => art.slug === slug);

  if (!painting) return <p className="p-10">Painting not found.</p>;

  // Handle the "Purchase" button click
  const handlePurchase = () => {
    addToCart(painting);  // Add the painting to the cart
    console.log('Added to cart', painting);  // Log the added painting
    alert(`${painting.title} has been added to the cart!`); // Optional: Alert to confirm action
  };

  return (
    <div className="p-10 flex flex-col md:flex-row gap-8">
      {/* Left side - Image */}
      <div className="flex-1">
        <img
          src={painting.image}
          alt={painting.title}
          className="w-full rounded-xl shadow-lg"
        />
      </div>

      {/* Right side - Info */}
      <div className="flex-1 space-y-4 flex items-center justify-center"> {/* Center the text */}
        <div>
          <h1 className="text-3xl font-bold">{painting.title}</h1>
          <p className="text-lg">{painting.description}</p>
          <p className="text-xl font-semibold">{painting.price}</p>
          {painting.sold ? (
            <div className="badge badge-error text-lg p-3">Sold Out</div>
          ) : (
            <button className="btn btn-primary" onClick={handlePurchase}>Purchase</button>
          )}
        </div>
      </div>
    </div>
  );
}
