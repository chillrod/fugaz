"use client";
import Image from "next/image";

import styles from "./section-1.module.scss";
import ArticleInfo from "@/components/article-info";
import { Variants, motion } from "@/lib/framer-motion";

export const Section1Variant: Variants = {
  offscreen: {
    y: 150,
  },
  onscreen: {
    y: -45,
    scale: 1,
    transition: {
      type: "tween",
    },
  },
};

export const imageVairant: Variants = {
  offscreen: {
    scale: 1.5,
  },
  onscreen: {
    scale: 1,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
};

export default function Section1() {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.5 }}
    >
      <motion.div variants={Section1Variant}>
        <section className={styles.section1}>
          <div className={styles["section1__clip"]}>
            <motion.div variants={imageVairant}>
              <Image
                className={styles["section1__photo"]}
                src="/sobrenos.jpg"
                alt="Foto 2"
                width={300}
                height={300}
              ></Image>
            </motion.div>
          </div>
          <div className={styles["section1__intersect-line"]}></div>

          <div className={styles["section1__article-info"]}>
            <ArticleInfo
              articleTitle="Sobre nós"
              articleText="A Fugaz é uma empresa de consultoria gastronômica que atua no mercado
        desde 2015. Nossa missão é ajudar nossos clientes a alcançarem o sucesso
        através de uma consultoria personalizada e de qualidade."
            />
          </div>

          <div className={styles["section1__logo-container"]}>
            <Image
              className={styles["section1__logo"]}
              src="/fugaz-logo.svg"
              alt="Fugaz"
              width={40}
              height={40}
            ></Image>
          </div>
        </section>
      </motion.div>
    </motion.div>
  );
}
