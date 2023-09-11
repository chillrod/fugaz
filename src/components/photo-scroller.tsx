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
    y: -450,
    transition: {
      type: "spring",
      duration: 2,
    },
  },
  onscreen: {
    y: 10,
    transition: {
      type: "spring",
      duration: 2,
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
      viewport={{ once: true, amount: 0.7 }}
    >
      <motion.div variants={photoScrollerVariants}>
        <div className={styles["photo-scroller"]}>
          {photos.map((photo, id) => {
            return (
              <Image
                className={`${styles["photo-scroller__photo"]}
            `}
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
