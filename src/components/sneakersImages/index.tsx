"use client"

import Image from "next/image";
import { useState } from "react";
import styles from "./sneakersImages.module.scss";

export function SneakersImages() {
  const [sourceImage, setSourceImage] = useState(String);
  const [isSelected, setIsSelected] = useState(false);

  const toggleImage = (index: number) => {
    const source = `/images/image-product-${index}.jpg`;
    setSourceImage(source);
    setIsSelected(!isSelected)
  }

  return (
    <div className={styles.container}>
      <Image
        src={!sourceImage ? `/images/image-product-1.jpg` : sourceImage}
        width={400}
        height={400}
        alt="Orange shoes"
        className={styles.imageProduct}
      />
      <div>
        <Image
          src="/images/image-product-1-thumbnail.jpg"
          width={80}
          height={80}
          alt="Orange shoes"
          onClick={() => toggleImage(1)}
          className={isSelected ? styles.selected : ""}
        />
        <Image
          src="/images/image-product-2-thumbnail.jpg"
          width={80}
          height={80}
          alt="Orange shoes"
          onClick={() => toggleImage(2)}
          className={isSelected ? styles.selected : ""}
        />
        <Image
          src="/images/image-product-3-thumbnail.jpg"
          width={80}
          height={80}
          alt="Orange shoes"
          onClick={() => toggleImage(3)}
        />
        <Image
          src="/images/image-product-4-thumbnail.jpg"
          width={80}
          height={80}
          alt="Orange shoes"
          onClick={() => toggleImage(4)}
        />
      </div>
    </div>
  )
}