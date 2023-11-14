"use client"

import { useState } from "react";
import { SneakersImages } from "../sneakersImages";
import { CartIcon } from "../icons/icon-cart";
import styles from "./mainPage.module.scss";
import { useCart } from "@/contexts/CartContext";

export default function MainPage() {
  const { addToCart } = useCart();
  const [count, setCount] = useState(Number);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    count === 0 ? setCount(count) : setCount(count - 1);
  };

  const handleCart = () => {
    addToCart(count);
  };

  return (
    <main className={styles.main}>
      <SneakersImages />
      <div className={styles.container}>
        <p className={styles.company}>Sneaker Company</p>
        <h1 className={styles.title}>Fall Limited Edition <br /> Sneakers</h1>
        <p className={styles.description}>These low-profile sneakers are your perfect casual wear companion Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
        <div>
          <div className={styles.price}>
            <p role="sneakersPrice">$125.00</p>
            <span>50%</span>
          </div>
          <span className={styles.fullprice}>$250.00</span>
        </div>
        <div className={styles.buttonContainer}>
          <div>
            <button onClick={handleDecrement} role="decrement">-</button>
            <span role="quantity">{count}</span>
            <button onClick={handleIncrement} role="increment">+</button>
          </div>
          <button 
            onClick={handleCart} 
            role="cartButton" 
            disabled={count === 0 ? true : false}>
            <CartIcon fillColor="#ffffff"/>
            <p>Add to cart</p>
          </button>
        </div>
      </div>
    </main>
  )
}