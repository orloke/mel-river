'use client'

import { Header } from "@/components/Header";
import { gsap } from "gsap";
import { useEffect } from "react";

export default function SameLayout({
  children,
}: {
  children: React.ReactNode;
}) {

    useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    gsap.to("body", {
      duration: 0,
      css: {
        visibility: "visible",
      },
    });
  }, []);

  return (
    <>
        <Header />
        {children}
    </>
  );
}
