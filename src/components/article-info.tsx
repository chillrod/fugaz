"use-client";

import Image from "next/image";

import styles from "./article-info.module.scss";
import { Text } from "@radix-ui/themes";
import { LayoutGroup, Variants, motion } from "@/lib/framer-motion";

export const ArticleInfoVariant: Variants = {
  offscreen: {
    y: 25,
    opacity: 0.1,
  },
  onscreen: {
    y: -15,
    opacity: 1,
    transition: {
      type: "spring",
    },
  },
};

export default function ArticleInfo({
  articleTitle,
  articleText,
}: {
  articleTitle: string;
  articleText: string;
}) {
  return (
    <motion.div
      className={styles["article-info"]}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.5 }}
    >
      <motion.div
        variants={ArticleInfoVariant}
        className={styles["article-info__title-container"]}
      >
        <Image
          className={styles["article-info__star"]}
          src="/star.svg"
          width={50}
          height={50}
          alt="Estrela"
        />
        <h2 className={styles["article-info__title"]}>{articleTitle}</h2>
      </motion.div>
      <motion.div variants={ArticleInfoVariant}>
        <Text className={styles["article-info__text"]}>{articleText}</Text>
      </motion.div>
    </motion.div>
  );
}
