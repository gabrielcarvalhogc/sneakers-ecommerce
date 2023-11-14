import { useState, useEffect } from "react";
import { CartIcon } from "../icons/icon-cart";
import styles from "./cart.module.scss";
import { useCart } from "@/contexts/CartContext";

export function Cart() {
  const { cartQuantity } = useCart();

  return (
    <button className={styles.button}>
      <CartIcon />
      <span>{cartQuantity}</span>
    </button>
  )
}