"use client";
import Image from "next/image";

import styles from "./homebar.module.scss";
import Link from "next/link";
import { Text } from "@radix-ui/themes";
import { ovo } from "@/utils/fonts";

export default function HomeBar() {
  return (
    <nav className={`${styles.homebar} ${ovo.variable}`}>
      <div>
        <Link href="/" className={styles["homebar__logo"]}>
          <Text size="6">Fugaz&Co.</Text>
        </Link>
      </div>
      <div className={styles["homebar__art-container"]}>
        <div className={styles["homebar__art-container-dot"]}></div>
        <Image src="/star.svg" width={30} height={30} alt="Estrela" />
      </div>

      {/* <ul className={styles["homebar__links"]}>
        <Link href="/" as="li">
          <Text>Sobre nós</Text>
        </Link>
        <Link href="/" as="li">
          <Text>Clientes</Text>
        </Link>
      </ul> */}
      {/* <HomeImage
        alt="Logo Fugaz"
        src="/fugaz-logo.svg"
        width={150}
        height={50}
      />
      {/* <div style={{
        width: "100%",
        height: "0px",
        outline: "1px dashed black",
      }}></div> */}
    </nav>
  );
}
