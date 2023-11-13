"use client"

import Image from "next/image";
import { CartIcon } from "../icons/icon-cart";
import { Logo } from "./logo";
import styles from "./header.module.scss"
import { HeaderLinks } from "./headerLinks";
import { useEffect, useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [storageQuantity, setStorageQuantity] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    let value
    value = localStorage.getItem("quantity") || ""
    setStorageQuantity(value)
  }, [])

  return (
    <header className={styles.header}>
      <nav className={styles.container}>
        <a href="/" data-testid="logo" className={styles.logo}>
          <Logo />
        </a>
        <div className={`${isOpen ? styles.hamburgerMenu : styles.open}`}>
          <div className={styles.hamburgerIcon} onClick={toggleMenu}>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </div>
          <HeaderLinks />
        </div>
      </nav>
      <div className={styles.userContainer}>
        <button>
          <CartIcon />
          <span>{storageQuantity}</span>
        </button>
        <Image
          src="/images/image-avatar.png"
          width={40}
          height={40}
          alt="Avatar do usuario"
          priority
        />
      </div>
      <div className={styles.divider}></div>
    </header>
  )
}