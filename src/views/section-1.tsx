"use client";
import Image from "next/image";

import styles from "./section-1.module.scss";
import ArticleInfo from "@/components/article-info";
import { Variants, motion } from "@/lib/framer-motion";

export const Section1Variant: Variants = {
  offscreen: {
    y: 200,
  },
  onscreen: {
    y: 0,
    rotate: 0,
    transition: {
      type: "tween",
    },
  },
};

export default function Section1() {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.15 }}
    >
      <motion.div variants={Section1Variant}>
        <section className={styles.section1}>
          <div className={styles["section1__clip"]}>
            <Image
              className={styles["section1__photo-container"]}
              src="/picture 2.png"
              alt="Foto 2"
              width={300}
              height={300}
            ></Image>
          </div>
          <div className={styles["section1__intersect-line"]}></div>

          <ArticleInfo />

          <div className={styles["section1__logo-container"]}>
            <Image
              className={styles["section1__logo"]}
              src="/fugaz-logo.svg"
              alt="Fugaz"
              width={100}
              height={100}
            ></Image>
          </div>
        </section>
      </motion.div>
    </motion.div>
  );
}
