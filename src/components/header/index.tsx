"use client"

import Image from "next/image";
import { CartIcon } from "../icons/icon-cart";
import { Logo } from "./logo";
import styles from "./header.module.scss"
import { HeaderLinks } from "./headerLinks";

export default function Header() {

  return (
    <header className={styles.header}>
      <nav className={styles.container}>
        <a href="/" data-testid="logo" className={styles.logo}>
          <Logo/>
        </a>
        <HeaderLinks/>
      </nav>
      <div className={styles.userContainer}>
        <button><CartIcon/></button>
        <Image 
          src="/images/image-avatar.png"
          width={40}
          height={40}
          alt="Avatar do usuario"
        />
      </div>
      <div className={styles.divider}></div>
    </header>
  )
}