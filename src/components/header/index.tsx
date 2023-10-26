import Image from "next/image";
import { CartIcon } from "../icons/icon-cart";
import { Logo } from "./logo";
import styles from "./header.module.scss"

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="/" data-testid="logo" className={styles.logo}>
          <Logo/>
        </a>
        <ul className={styles.list}>
          <li>
            <a href="#">Collections</a>
          </li>
          <li>
            <a href="#">Men</a>
          </li>
          <li>
            <a href="#">Women</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className={styles.userContainer}>
        <button><CartIcon/></button>
        <Image 
          src="/images/image-avatar.png"
          width={40}
          height={40}
          alt="Avatar do usuario"
        />
      </div>
    </header>
  )
}