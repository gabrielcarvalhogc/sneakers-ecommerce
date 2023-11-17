"use client"

import Image from "next/image";
import { CartIcon } from "../icons/icon-cart";
import styles from "./cart.module.scss";
import { useCart } from "@/contexts/CartContext";
import { Deleteicon } from "../icons/icon-delete";
import { useState } from "react";

export function Cart() {
  const { cartQuantity } = useCart();
  const { deleteCart } = useCart();
  const { addToCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  const handleDelete = () => {
    deleteCart(cartQuantity);
    addToCart(0);
    setIsOpen(false);
  }

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={handleOpen} data-testid="button">
        <CartIcon />
        <span data-testid="quantity">{cartQuantity}</span>
      </button>
      {isOpen &&
        <div className={styles.cartInfo}>
          <h4 className={styles.title}>Cart</h4>
          <div className={styles.divider}></div>

          <div className={styles.info}>
            {cartQuantity === 0 
              ? isOpen && <p className={styles.emptyCart}>Your cart is empty</p> 
              : isOpen &&
                <div>
                  <Image
                    src="/images/image-product-1-thumbnail.jpg"
                    width={45}
                    height={45}
                    alt="orange shoes"
                  />
                  <div>
                    <p>Fall Limited Edition Sneakers</p>
                    <p>
                      {`$125.00 x ${cartQuantity} `}
                      <span>{` $${cartQuantity * 125}.00`}</span>
                    </p>
                  </div>
                  <button onClick={handleDelete} role="deleteBtn">
                    <Deleteicon />
                  </button>
                </div>
            }
          </div>
        </div>
      }
    </div>
  )
}