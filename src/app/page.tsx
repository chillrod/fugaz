"use client";

import SplashScreen from "@/components/splash-creen";
import { AnimatePresence, LayoutGroup } from "@/lib/framer-motion";
import HomeScreen from "@/views/home";
import Section1 from "@/views/section-1";
import { Grid } from "@radix-ui/themes";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => {
      setIsLoading(false);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading ? (
          <SplashScreen />
        ) : (
          <>
            <LayoutGroup>
              <HomeScreen />
              <Section1 />
            </LayoutGroup>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
