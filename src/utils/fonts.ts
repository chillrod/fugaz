import { Ovo } from "next/font/google";
import { Arimo } from "next/font/google";

export const ovo = Ovo({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-ovo",
});

export const arimo = Arimo({
  subsets: ["latin-ext"],
  weight: ["400", "500", "700"],
  variable: "--font-arimo",
});
