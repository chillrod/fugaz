"use client";
import styles from "./splash-screen.module.scss";
import { motion } from "@/lib/framer-motion";
import { ovo } from "@/utils/fonts";
import { Text } from "@radix-ui/themes";

export default function SplashScreen() {
  return (
    <div className={`${styles["splash-screen"]} ${ovo.variable}`}>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0.5 }}
        transition={{ ease: "easeOut", duration: 1 }}
        className={styles["splash-screen__content"]}
      >
        <Text size="9" color="gray">
          Fugaz & Co
        </Text>
      </motion.div>
    </div>
  );
}
