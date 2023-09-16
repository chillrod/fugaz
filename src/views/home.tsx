import { Button, Text } from "@radix-ui/themes";
import styles from "./home.module.scss";

import { LayoutGroup, motion, Variants } from "@/lib/framer-motion";
import PhotoScroller, { PhotoScrollerProps } from "@/components/photo-scroller";
import { useEffect } from "react";
import Image from "next/image";
import SocialMediaLink from "@/components/social-media-link";
import { InstagramLogoIcon } from "@radix-ui/react-icons";

export const homePageAnimationVariant: Variants = {
  offscreen: {
    y: 400,
    opacity: 0.8,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 15,
      duration: 0.1,
    },
  },
};

const photos: PhotoScrollerProps[] = [
  {
    src: "/picture1.webp",
    alt: "Foto de um homem preparando um prato de comida",
  },
  {
    src: "/picture2.webp",
    alt: "Foto de um homem preparando um prato de comida",
  },
  {
    src: "/picture3.webp",
    alt: "Foto de um homem preparando um prato de comida",
  },
  {
    src: "/picture4.webp",
    alt: "Foto de um homem preparando um prato de comida",
  },
  {
    src: "/picture5.webp",
    alt: "Foto de um homem preparando um prato de comida",
  },
];

export default function HomeScreen() {
  // useEffect(() => {
  //   window.scrollTo(0, 0);

  //   return () => {
  //     window.scrollTo(0, 0);
  //   };
  // }, []);

  return (
    <>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
      >
        <LayoutGroup>
          <motion.main
            className={styles["home"]}
            variants={homePageAnimationVariant}
          >
            <section className={styles["home__header"]}>
              <div
                className={`${styles["home__cta-content"]} ${styles["home__cta-content--typed"]}`}
              >
                <span hidden>
                  A Fugaz oferece consultoria gastronômica para experiências
                  memoráveis com sabores de alta classe. Tenha mais eficiência
                  em seu estabelecimento com consultoria assertiva e de alta
                  qualidade.
                </span>
              </div>

              <div className={styles["home__social-media"]}>
                <Button
                  onClick={() =>
                    window.open(
                      "https://api.whatsapp.com/send?phone=5582137198237&text=Ol%C3%A1!%20Estou%20interessado%20em%20conhecer%20mais%20sobre%20a%20consultoria%20Fugaz."
                    )
                  }
                  size="3"
                >
                  Entrar em contato
                </Button>

                <SocialMediaLink
                  name="Instagram"
                  url="https://www.instagram.com/fugaz.consultoria"
                >
                  <InstagramLogoIcon />
                </SocialMediaLink>
              </div>

              <div className={styles["home__cta-content"]}>
                <Text className={`${styles["home__cta-heading"]}`}>
                  Fu
                  <br />
                  gaz
                </Text>
                <Text className={`${styles["home__cta-paragraph"]}`}>&Co.</Text>
              </div>

              <div className={styles["home__image-scroller"]}>
                <PhotoScroller photos={photos} />
              </div>
            </section>
          </motion.main>
        </LayoutGroup>
      </motion.div>
    </>
  );
}
