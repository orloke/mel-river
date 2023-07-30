"use client";

import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { gsap } from "gsap";
import { useEffect, useState } from "react";

export default function SameLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    gsap.to("body", {
      duration: 0,
      css: {
        visibility: "visible",
      },
    });

    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    // const handleResize = () => {
    //   setDimensions({
    //     width: window.innerWidth,
    //     height: window.innerHeight,
    //   });
    // };

    // window.addEventListener("resize", handleResize);

    // return () => {
    //   window.removeEventListener("resize", handleResize);
    // };
  }, []);

  return (
    <>
      <Header />
      <div className='App'>{children}</div>
      <Navigation />
    </>
  );
}
