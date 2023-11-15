import React, { ReactNode, createContext, useContext, useEffect, useState } from "react";

interface CartContextProps {
  cartQuantity: number;
  addToCart: (quantity: number) => void;
}

interface ChildrenProps {
  children: ReactNode;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider = ({ children }: ChildrenProps) => {
  const [cartQuantity, setCartQuantity] = useState(0);

  useEffect(() => {
    const isClient = typeof window !== "undefined";
    const storedQuantity = isClient ? localStorage.getItem("cartQuantity") : null;
    const initialCartQuantity = storedQuantity ? parseInt(storedQuantity, 10) : 0;

    setCartQuantity(initialCartQuantity);
  }, []);

  const addToCart = (quantity: number) => {
    setCartQuantity(() => {
      if (typeof window !== "undefined") {
        localStorage.setItem("cartQuantity", quantity.toString());
      }
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
  return context || { cartQuantity: 0, addToCart: () => {} };
};
