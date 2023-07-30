"use client";

import { homeAnimaiton } from "@/animations/home";
import { Banner } from "@/components/Banner";
import { Cases } from "@/components/Cases";
import { IntroOverlay } from "@/components/IntroOverlay";
import { useEffect, useState } from "react";

export default function Home() {
  const [animationComplete, setAnimationComplete] = useState(false);

  const completeAnimation = () => setAnimationComplete(true);

  useEffect(() => {
    homeAnimaiton(completeAnimation);
  }, []);
  return (
    <>
      {!animationComplete && <IntroOverlay />}
      <Banner />
      <Cases />
    </>
  );
}
