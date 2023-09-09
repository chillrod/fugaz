"use client";

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
    </div>
  );
}
