"use client";
import Image from "next/image";

import styles from "./section-1.module.scss";
import ArticleInfo from "@/components/article-info";
import { LayoutGroup, Variants, motion } from "@/lib/framer-motion";
import PhotoScroller, { PhotoScrollerProps } from "@/components/photo-scroller";
import { Heading } from "@radix-ui/themes";

export const Section1Variant: Variants = {
  offscreen: {
    y: -100,
  },
  onscreen: {
    y: 150,
    scale: 1,
    transition: {
      type: "tween",
    },
  },
};

export const Section1ImageVariants: Variants = {
  offscreen: {
    scale: 1,
  },
  onscreen: {
    scale: 1.1,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};

const photos: PhotoScrollerProps[] = [
  {
    src: "/picture2.webp",
    alt: "Foto de um homem preparando um prato de comida",
  },
  {
    src: "/picture1.webp",
    alt: "Foto de um homem preparando um prato de comida",
  },
  {
    src: "/picture3.webp",
    alt: "Foto de um homem preparando um prato de comida",
  },
];

export default function Section1() {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div variants={Section1Variant}>
        <section className={styles.section1}>
          <Heading>Sobre nós</Heading>
        </section>
      </motion.div>
      {/* <motion.div variants={Section1Variant}>
        <section className={styles.section1}>
          <div className={styles["section1__clip"]}>
            <motion.div variants={Section1ImageVariants}>
              <Image
                className={styles["section1__photo"]}
                src="/sobrenos.webp"
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
      </motion.div> */}

      {/* <motion.div variants={Section1Variant}>
        <section
          className={`
        ${styles["section1"]}
        ${styles["section1--green"]}
        `}
        >
          <div className={styles["section1__article-info"]}>
            <ArticleInfo
              articleTitle="Sobre nós"
              articleText="A Fugaz é uma empresa de consultoria gastronômica que atua no mercado
            desde 2015. Nossa missão é ajudar nossos clientes a alcançarem o sucesso
            através de uma consultoria personalizada e de qualidade."
            />
          </div>

          <div className={styles["section1__clip"]}>
            <motion.div variants={Section1ImageVariants}>
              <Image
                className={styles["section1__photo"]}
                src="/sobrenos.webp"
                alt="Foto 2"
                width={300}
                height={300}
              ></Image>
            </motion.div>
          </div>

          <div className={styles["section1__intersect-line"]}></div>
        </section>
        <PhotoScroller photos={photos} />
      </motion.div> */}
    </motion.div>
  );
}
