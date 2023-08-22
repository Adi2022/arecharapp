import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
	const [addedToCart, setAddedToCart] = useState(false);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, { ...product, id: Math.random() }]); // Adding a unique ID to the product
    setCartCount(cartCount + 1);
    setAddedToCart(true)
    
  };

  const updateCartItemQuantity = (productId, newQuantity) => {
    const updatedCart = cartItems.map((item) =>
      item.product.id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
    setCartCount(cartCount - 1);
  };

  const clearCart = () => {
    setCartItems([]);
    setCartCount(0);
  };

  const cartValue = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    cartCount,
    updateCartItemQuantity,
    addedToCart,
    setCartItems
  };

  return (
    <CartContext.Provider value={cartValue}>{children}</CartContext.Provider>
  );
};
