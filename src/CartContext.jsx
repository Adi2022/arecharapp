import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
    setCartCount(cartCount + 1);

    console.log(product)
  };
  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  };
  const clearCart = () => {
    setCartItems([]);
  };

  const cartValue = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    cartCount,

  };

  return (
    <CartContext.Provider value={cartValue}>{children}</CartContext.Provider>
  );
};
