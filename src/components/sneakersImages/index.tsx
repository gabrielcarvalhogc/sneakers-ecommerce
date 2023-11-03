"use client"

import Image from "next/image";
import { ReactNode, useState } from "react";
import styles from "./sneakersImages.module.scss";

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
        {[1,2,3,4].map((index: number) => (
          <Image
            key={index}
            src={`/images/image-product-${index}-thumbnail.jpg`}
            width={80}
            height={80}
            alt="Orange shoes"
            onClick={() => toggleImage(index)}
            className={isSelectedClass === index ? styles.selected : ""}
          />
        ))}
      </div>
    </div>
  )
}