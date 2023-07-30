"use client";

import { Banner } from "@/components/Banner";
import { Cases } from "@/components/Cases";
import { IntroOverlay } from "@/components/IntroOverlay";
import { gsap } from "gsap";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {

    const tl = gsap.timeline();

    tl.from(".line span", {
      duration: 1.8,
      y: 100,
      stagger: 0.3,
      ease: "power4.out",
      delay: 1,
      skewY: 7,
    })
      .to(".overlay-top", {
        duration: 1.6,
        height: 0,
        ease: "expo.inOut",
        stagger: 0.4,
      })
      .to(".overlay-bottom", {
        duration: 1.6,
        width: 0,
        ease: "expo.inOut",
        stagger: 0.4,
        delay: -0.8,
      })
      .to(".intro-overlay", {
        duration: 0,
        css: {
          display: "none",
        },
      })
      .from(".case-image img", {
        duration: 1.6,
        scale: 1.4,
        ease: "expo.inOut",
        delay: -2,
        stagger: 0.4,
      });
  }, []);
  return (
    <>
      <IntroOverlay />
      <Banner />
      <Cases />
    </>
  );
}
