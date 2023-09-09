"use-client";

import Image from "next/image";

import styles from "./article-info.module.scss";
import { Text } from "@radix-ui/themes";

export default function ArticleInfo() {
  return (
    <div className={styles["article-info"]}>
      <div className={styles["article-info__title-container"]}>
        <Image src="/star.svg" width={50} height={50} alt="Estrela" />
        <h2 className={styles["article-info__title"]}>Sobre nós</h2>
      </div>

      <Text className={styles["article-info__text"]}>
        A Fugaz é uma empresa de consultoria gastronômica que atua no mercado
        desde 2015. Nossa missão é ajudar nossos clientes a alcançarem o sucesso
        através de uma consultoria personalizada e de qualidade.
      </Text>
    </div>
  );
}
