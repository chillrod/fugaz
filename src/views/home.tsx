import { Text } from "@radix-ui/themes";
import styles from "./home.module.scss";

import { LayoutGroup, motion, Variants } from "@/lib/framer-motion";
import { Arimo } from "next/font/google";
import PhotoScroller, { PhotoScrollerProps } from "@/components/photo-scroller";
import { useEffect } from "react";
import Image from "next/image";

const arimo = Arimo({
  subsets: ["latin-ext"],
  weight: ["400", "500", "700"],
  variable: "--font-arimo",
});

export const homePageAnimationVariant: Variants = {
  offscreen: {
    y: 200,
  },
  onscreen: {
    y: 0,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 35,
      duration: 0.1,
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
  useEffect(() => {
    window.scrollTo(0, 0);

    return () => {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <LayoutGroup>
      <motion.main
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.div
          variants={homePageAnimationVariant}
          className={`${styles["home"]} ${arimo.variable}`}
        >
          <Text size="7" className={styles["home__hero"]}>
            <span hidden>
              A Fugaz oferece consultoria gastronômica para experiências
              memoráveis com sabores de alta classe. Tenha mais eficiência e
              qualidade em seu estabelecimento com uma consultoria assertiva e
              de alta qualidade. Com metodologia ágil e profissionais altamente
              qualificados, a Fugaz é a melhor opção para seu negócio.
            </span>
          </Text>

          <Image
            className={`${styles["home__hero-image"]}`}
            src="/gastronomia-elegante.svg"
            alt="Gatronomia"
            width={200}
            height={200}
          />

          <span className={`${styles["home__hero-after"]}`}>
            <Text className={`${styles["home__hero-heading"]}`}>
              Fu
              <br />
              gaz
            </Text>
            <Text className={`${styles["home__hero-paragraph"]}`}>&Co.</Text>
          </span>
          <div className={styles["home__hero-image-container"]}>
            <PhotoScroller photos={photos} />
          </div>
        </motion.div>
      </motion.main>
    </LayoutGroup>
  );
}
