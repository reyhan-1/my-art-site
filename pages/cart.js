import { useCart } from '@/context/CartContext';
import Link from 'next/link';

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  // Function to handle removing an item from the cart
  const handleRemove = (slug) => {
    removeFromCart(slug);
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Your Shopping Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cart.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-base-100 shadow-lg rounded-lg">
              <div className="flex items-center">
                <img src={item.image} alt={item.title} className="h-16 w-16 object-cover rounded-lg mr-4" />
                <div>
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                  <p>{item.price}</p>
                </div>
              </div>
              <button
                className="btn btn-error text-white"
                onClick={() => handleRemove(item.slug)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="mt-6">
        <Link href="/checkout">
          <button className="btn btn-primary">Proceed to Checkout</button>
        </Link>
      </div>
    </div>
  );
}
