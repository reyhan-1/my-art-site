// CartContext.js

import { createContext, useContext, useState } from 'react';

// Create context
const CartContext = createContext();

// Create a provider
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Add item to cart with memoization to avoid unnecessary rerenders
  const addToCart = (painting) => {
    setCart((prevCart) => {
      // Check if the item is already in the cart
      const isItemInCart = prevCart.some((item) => item.slug === painting.slug);
      if (isItemInCart) {
        return prevCart; // Don't add it again if already in the cart
      }
      // Otherwise, add the new item
      return [...prevCart, painting];
    });
  };

  // Remove item from cart
  const removeFromCart = (slug) => {
    setCart((prevCart) => prevCart.filter((item) => item.slug !== slug));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

// Custom hook to use cart context
export const useCart = () => useContext(CartContext);
