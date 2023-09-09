"use client";

import { Variants, motion } from "@/lib/framer-motion";
import styles from "./photo-scroller.module.scss";
import Image from "next/image";

export interface PhotoScrollerProps {
  src: string;
  alt: string;
}

export const photoScrollerVariants: Variants = {
  offscreen: {
    scale: 1,
    y: 45,
    transition: {
      type: "tween",
      duration: 1.5,
    },
  },
  onscreen: {
    scale: 1.2,
    y: -15,
    transition: {
      type: "tween",
      duration: 1.5,
    },
  },
};

export default function PhotoScroller({
  photos,
}: {
  photos: PhotoScrollerProps[];
}) {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.2 }}
    >
      <motion.div
        variants={photoScrollerVariants}
        className={styles["photo-scroller"]}
      >
        <div
          className={`${styles["photo-scroller__photo"]}
            ${styles["photo-scroller__photo-primary"]}
            `}
        >
          {photos.map((photo, id) => {
            return (
              <Image
                key={id}
                src={photo.src}
                alt={photo.alt}
                width={300}
                height={300}
              />
            );
          })}
        </div>
        <div
          className={`${styles["photo-scroller__photo"]}
            ${styles["photo-scroller__photo-secondary"]}
            `}
        >
          {photos.map((photo, id) => {
            return (
              <Image
                key={id}
                src={photo.src}
                alt={photo.alt}
                width={300}
                height={300}
              />
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
}
