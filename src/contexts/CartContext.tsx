"use client"

import React, { ReactNode, createContext, useContext, useState } from "react";

interface CartContextProps {
  cartQuantity: number;
  addToCart: (quantity: number) => void;
}

interface ChildrenProps {
  children: ReactNode
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider = ( {children}: ChildrenProps ) => {
  const [cartQuantity, setCartQuantity] = useState(() => {
    if(typeof window !== "undefined") {
      const storedQuantity = localStorage.getItem("cartQuantity");
      return storedQuantity ? parseInt(storedQuantity, 10) : 0;
    }
    return 0
  });

  const addToCart = (quantity: number) => {
    setCartQuantity(() => {
      localStorage.setItem("cartQuantity", quantity.toString());
      return quantity;
    });
  };

  const value: CartContextProps = {
    cartQuantity,
    addToCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = (): CartContextProps => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
