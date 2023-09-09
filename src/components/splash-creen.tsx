"use client";

import styles from "./splash-screen.module.scss";
import Image from "next/image";
import { motion } from "@/lib/framer-motion";
import CircularText from "./circular-text";

export default function SplashScreen() {
  return (
    <div className={styles["splash-screen"]}>
      <motion.div
        animate={{ scale: 2 }}
        transition={{ ease: "easeOut", duration: 5 }}
        className={styles["splash-screen__content"]}
      >
        <Image src="/fugaz-logo.svg" alt="Fugaz" width={200} height={200} />
      </motion.div>
    </div>
  );
}
