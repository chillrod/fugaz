import { Text } from "@radix-ui/themes";
import styles from "./home.module.scss";

import { AnimatePresence, motion, Variants } from "@/lib/framer-motion";
import { Arimo } from "next/font/google";
import Migra from "next/font/local";
import Image from "next/image";
import PhotoScroller, { PhotoScrollerProps } from "@/components/photo-scroller";

const arimo = Arimo({
  subsets: ["latin-ext"],
  weight: ["400", "500", "700"],
  variable: "--font-arimo",
});

const migra = Migra({
  src: "../fonts/Migra-Extrabold.ttf",
  variable: "--font-migra",
});

export const homePageAnimationVariant: Variants = {
  offscreen: {
    y: -30,
  },
  onscreen: {
    y: 0,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      duration: 3,
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

export default function HomeScreen() {
  return (
    <motion.main
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.5 }}
    >
      <motion.div variants={homePageAnimationVariant}>
        <div className={`${styles.home} ${arimo.variable} ${migra.variable}`}>
          <motion.div
            className={styles["home__title-container"]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: [0.17, 0.67, 0.83, 0.67] }}
          >
            <Text className={`${styles["home__caption"]} ${arimo.variable}`}>
              Fugaz & Co. Consultoria gastronômica
            </Text>
            <h1 className={styles["home__title"]}>
              O sucesso do seu negócio com nossa consultoria gastronômica
              personalizada
            </h1>
            <Text
              className={`${styles["home__caption"]} ${styles["home__caption--right"]} ${arimo.variable}`}
            >
              Fugaz & Co. Consultoria gastronômica
            </Text>
          </motion.div>
          <div className={styles["home__photo-container"]}>
            <PhotoScroller photos={photos} />
          </div>
        </div>
      </motion.div>
    </motion.main>
  );
}
