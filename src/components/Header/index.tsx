"use client";

import { UpArrowCircle } from "@/assets/up-arrow-circle";
import { gsap } from "gsap";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface HeaderProps {
  dimensions: {
    width: number;
    height: number;
  };
}

export function Header({ dimensions }: HeaderProps) {
  const [menuState, setMenuState] = useState({ menuOpened: false });

  const pathname = usePathname();

  console.log(pathname);

  const tl = gsap.timeline();

  useEffect(() => {
    if (menuState.menuOpened) {
      gsap.to("nav", { css: { display: "block" } });
      gsap.to("body", { css: { overflow: "hidden" } });

      tl.to(".App", {
        duration: 1,
        y: dimensions.width <= 654 ? "70vh" : "80vh",
        ease: "expo.inOut",
      })
        .to(".hamburger-menu span", {
          duration: 0.6,
          delay: -1,
          scaleX: 0,
          transformOrigin: "50% 0%",
          ease: "expo.inOut",
        })
        .to("#Path_1", {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 5,
          },
        })
        .to("#Path_2", {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 20,
          },
        })
        .to("#Line_1", {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 40,
            strokeDasharray: 18,
          },
        })
        .to("#circle", {
          duration: 0.6,
          delay: -0.8,
          css: {
            strokeDashoffset: 0,
          },
        })
        .to(".hamburger-menu-close", {
          duration: 0.6,
          delay: -0.8,
          css: {
            display: "block",
          },
        });
    } else {
      tl.to(".App", {
        duration: 1,
        y: 0,
        ease: "expo.inOut",
      })
        .to("#circle", {
          duration: 0.6,
          delay: -0.8,
          css: {
            strokeDashoffset: -193,
            strokeDasharray: 227,
          },
        })
        .to("#Path_1", {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 10,
          },
        })
        .to("#Path_2", {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 10,
          },
        })
        .to("#Line_1", {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 40,
            strokeDasharray: 40,
          },
        })
        .to(".hamburger-menu span", {
          duration: 0.6,
          delay: -0.8,
          scaleX: 1,
          transformOrigin: "50% 0%",
          ease: "expo.inOut",
        })
        .to(".hamburger-menu-close", {
          duration: 0,
          css: {
            display: "none",
          },
        })
        .to("body", { css: { overflow: "auto" } })
        .to("nav", {
          css: {
            display: "none",
          },
        });
    }
  }, [menuState]);

  useEffect(() => {
    setMenuState({ menuOpened: false });
  }, [pathname]);

  return (
    <div className='header'>
      <div className='container'>
        <div className='row v-center space-between'>
          <div className='logo'>
            <Link href='/'>AGENCY.</Link>
          </div>
          <div className='nav-toogle'>
            <button
              onClick={() => setMenuState({ menuOpened: true })}
              className='hamburger-menu'
            >
              <span></span>
              <span></span>
            </button>
            <button
              onClick={() => setMenuState({ menuOpened: false })}
              className='hamburger-menu-close'
            >
              <UpArrowCircle className='tablet:w-14 phone:w-12' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
