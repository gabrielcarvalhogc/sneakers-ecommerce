"use client"

import Image from "next/image";
import { useState } from "react";
import styles from "./sneakersImages.module.scss";
import { sneakersImagesArray } from "@/utils/sneakersImagesArray";

export function SneakersImages() {
  const [sourceImage, setSourceImage] = useState(String);
  const [isSelectedClass, setIsSelectedClass] = useState<number | null>(null);

  const toggleImage = (index: number) => {
    const source = `/images/image-product-${index}.jpg`;
    setSourceImage(source);

    if (isSelectedClass === index) {
      setIsSelectedClass(null);
    } else {
      setIsSelectedClass(index);
    }
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
        {sneakersImagesArray.map((item) => (
          <Image
            key={item.index}
            src={item.thumbnail}
            width={80}
            height={80}
            alt={item.alt}
            onClick={() => toggleImage(item.index)}
            className={isSelectedClass === item.index ? styles.selected : ""}
          />
        ))}
      </div>
    </div>
  )
}