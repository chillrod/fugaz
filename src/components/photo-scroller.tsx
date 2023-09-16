"use client";

import { Variants, motion } from "@/lib/framer-motion";
import styles from "./photo-scroller.module.scss";
import Image from "next/image";

export interface PhotoScrollerProps {
  src: string;
  alt: string;
}

export default function PhotoScroller({
  photos,
}: {
  photos: PhotoScrollerProps[];
}) {
  return (
    <div className={styles["photo-scroller"]}>
      {photos.map((photo, id) => {
        return (
          <motion.div
            key={id}
            whileHover={{
              scale: 1.5,
              transition: {
                type: "spring",
                duration: 0.5,
              },
            }}
          >
            <Image
              className={`${styles["photo-scroller__photo"]}
            `}
              src={photo.src}
              alt={photo.alt}
              width={300}
              height={300}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
