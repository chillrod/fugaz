"use-client";

import Image from "next/image";

import styles from "./article-info.module.scss";
import { Text } from "@radix-ui/themes";

export default function ArticleInfo({
  articleTitle,
  articleText,
}: {
  articleTitle: string;
  articleText: string;
}) {
  return (
    <div className={styles["article-info"]}>
      <div className={styles["article-info__title-container"]}>
        <Image src="/star.svg" width={50} height={50} alt="Estrela" />
        <h2 className={styles["article-info__title"]}>{articleTitle}</h2>
      </div>

      <Text className={styles["article-info__text"]}>{articleText}</Text>
    </div>
  );
}
