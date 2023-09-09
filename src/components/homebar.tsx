"use client";
import Image from "next/image";

import styles from "./homebar.module.scss";
import { motion } from "@/lib/framer-motion";
import Link from "next/link";
import { Text } from "@radix-ui/themes";

export default function HomeBar() {
  return (
    <nav className={styles.homebar}>
      <motion.div
        whileHover={{ scale: 1.2 }}
        transition={{ ease: "easeOut", duration: 3 }}
      >
        <Link href="/">
          <Image
            className={styles["homebar__logo"]}
            src="/fugaz-logo.svg"
            width={120}
            height={30}
            alt="Logo Fugaz"
          />
        </Link>
      </motion.div>
      <div className={styles["homebar__art-container"]}>
        <div className={styles["homebar__art-container-dot"]}></div>
        <Image src="/star.svg" width={30} height={30} alt="Estrela" />
      </div>

      <ul className={styles["homebar__links"]}>
        <Link href="/" as="li">
          <Text>Sobre nós</Text>
        </Link>
        <Link href="/" as="li">
          <Text>Clientes</Text>
        </Link>
      </ul>
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
