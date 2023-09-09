import styles from "./home.module.scss";

import { motion, Variants } from "@/lib/framer-motion";
import Migra from "next/font/local";
import Image from "next/image";

const migra = Migra({
  src: "../app/Migra-Extrabold.ttf",
  variable: "--font-migra",
});

const cardVariants: Variants = {
  offscreen: {
    y: -15,
  },
  onscreen: {
    y: 10,
    rotate: 0,
    transition: {
      type: "tween",
    },
  },
};

export default function HomeScreen() {
  return (
    <main className={`${styles.home} ${migra.variable}`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: [0.17, 0.67, 0.83, 0.67] }}
      >
        <h1 className={styles["home__title"]}>
          O sucesso do seu negócio com nossa consultoria gastronômica
          personalizada
        </h1>
      </motion.div>

      <Image
        className={styles["home__logo"]}
        src="/fugaz-logo.svg"
        width="100"
        height="100"
        alt="Fugaz"
      />

      <Image
        className={styles["home__circular-text"]}
        src="/gastronomia-elegante.svg"
        width="100"
        height="100"
        alt="Gastronomia elegante"
      />
      <motion.div
        className={styles["home__photo-container"]}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.15 }}
      >
        <motion.div variants={cardVariants}>
          <Image
            className={styles["home__photo"]}
            src="/picture 1.png"
            width="400"
            height="500"
            alt="Foto de um homem preparando um prato de comida"
          />
        </motion.div>
      </motion.div>
    </main>
  );
}
