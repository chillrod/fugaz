"use client";

import SplashScreen from "@/components/splash-creen";
import { AnimatePresence } from "@/lib/framer-motion";
import HomeScreen from "@/views/home";
import Section1 from "@/views/section-1";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => {
      setIsLoading(true);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading ? (
          <SplashScreen />
        ) : (
          <>
            <HomeScreen />
            <Section1 />
          </>
        )}
      </AnimatePresence>
    </>
  );
}
