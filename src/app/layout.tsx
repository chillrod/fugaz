import { Arimo } from "next/font/google";

const ovo = Arimo({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-arimo",
});

export const metadata: Metadata = {
  title: "Fugaz & Co.",
  description:
    "O sucesso do seu negócio com nossa consultoria gastronômica personalizada",
  icons: [
    {
      href: "/fugaz-logo.svg",
      sizes: "16x16",
      type: "image/svg",
      url: "/fugaz-logo.svg",
    },
  ],
};

import HomeBar from "@/components/homebar";
import "@/lib/theme-config.css";
import styles from "@/styles/global.module.scss";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { Metadata } from "next";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className={`${styles.app} ${ovo.variable}`}>
        <Theme accentColor="orange" hasBackground>
          <HomeBar />
          {children}
        </Theme>
      </body>
    </html>
  );
}
