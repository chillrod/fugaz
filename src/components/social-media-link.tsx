"use client";
import { Flex, Text } from "@radix-ui/themes";
import Link from "next/link";

import styles from "./social-media-link.module.scss";

export default function SocialMediaLink({
  children,
  name,
  url,
}: {
  children: React.ReactNode;
  name: string;
  url: string;
}) {
  return (
    <div className={styles["social-media-link"]}>
      <Link href={url} target="_blank">
        <Flex align="center" gap="2">
          {children}
          <Text size="3">{name}</Text>
        </Flex>
      </Link>
    </div>
  );
}
