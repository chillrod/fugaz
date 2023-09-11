"use client";
import SplashScreen from "@/components/splash-creen";
import { AnimatePresence, LayoutGroup } from "@/lib/framer-motion";
import HomeScreen from "@/views/home";
import Section1 from "@/views/section-1";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      setIsLoading(true);
    };
  }, []);

  return (
    <LayoutGroup>
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
    </LayoutGroup>
  );
}
