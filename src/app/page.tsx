'use client'

import { Banner } from "@/components/Banner";
import { Cases } from "@/components/Cases";
import { Header } from "@/components/Header";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);
  return (
    <>
      <Header />
      <Banner />
      <Cases />
    </>
  );
}
