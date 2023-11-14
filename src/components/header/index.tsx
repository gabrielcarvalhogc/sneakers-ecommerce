"use client"

import Image from "next/image";
import { Logo } from "./logo";
import styles from "./header.module.scss"
import { HeaderLinks } from "./headerLinks";
import { useState } from "react";
import { Cart } from "../cart";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
      <Cart/>
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