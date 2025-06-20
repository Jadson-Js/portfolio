"use client";

import { About } from "@/components/about/About";
import { Contact } from "@/components/contact/Contact";
import { Experiences } from "@/components/experiences/Experiences";
import { Footer } from "@/components/footer/Footer";
import { Hero } from "@/components/hero/Hero";
import { Navbar } from "@/components/hero/Navbar";
import { Projects } from "@/components/projects/Projects";
import { Sidebar } from "@/components/Sidebar";
import { Whatsapp } from "@/components/Whatsapp";
import { sectionsName } from "@/constants/sections";

import React from "react";

export default function Home() {
  const lastScrollY = React.useRef(0);
  const sectionTarget = React.useRef(0);
  const [isMoving, setIsMoving] = React.useState({
    status: false,
    direction: 1,
  });

  // Refs para controlar o touch
  const touchStart = React.useRef(0);
  const touchEnd = React.useRef(0);

  React.useEffect(() => {
    document.body.style.overflow = "hidden";

    // Handler para desktop (wheel)
    const handleWheel = (e) => {
      e.preventDefault();
      const scrollY = e.deltaY;
      const isTopScroll = scrollY < 0;

      if (!isMoving.status) {
        setIsMoving({
          status: true,
          direction: isTopScroll ? -1 : 1,
        });

        lastScrollY.current = scrollY;
      }
    };

    // Handler para mobile (touch start)
    const handleTouchStart = (e) => {
      touchStart.current = e.targetTouches[0].clientY;
    };

    // Handler para mobile (touch move)
    const handleTouchMove = (e) => {
      e.preventDefault(); // Previne o scroll padrão
      touchEnd.current = e.targetTouches[0].clientY;
    };

    // Handler para mobile (touch end)
    const handleTouchEnd = () => {
      if (!touchStart.current || !touchEnd.current) return;

      const distance = touchStart.current - touchEnd.current;
      const isTopSwipe = distance < 0;
      const isBottomSwipe = distance > 0;

      // Mínimo de distância para considerar um swipe válido
      const minSwipeDistance = 50;

      if (Math.abs(distance) > minSwipeDistance && !isMoving.status) {
        setIsMoving({
          status: true,
          direction: isTopSwipe ? -1 : 1,
        });
      }

      // Reset dos valores
      touchStart.current = 0;
      touchEnd.current = 0;
    };

    // Adicionar event listeners
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isMoving.status]);

  React.useEffect(() => {
    if (!isMoving.status) return;

    setTimeout(() => {
      setIsMoving({
        status: false,
        direction: isMoving.direction,
      });
    }, 200);

    if (
      sectionTarget.current + isMoving.direction >= 0 &&
      sectionTarget.current + isMoving.direction <= 4
    ) {
      console.log(sectionTarget.current + isMoving.direction);
      sectionTarget.current += isMoving.direction;
    }
  }, [isMoving.status]);

  React.useEffect(() => {
    const el = document.getElementById(sectionsName[sectionTarget.current]);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [sectionTarget.current]);

  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />

        <About />

        <Projects />

        <Experiences />

        <Contact />

        <Sidebar />
        <Whatsapp />
      </main>
      <Footer />
    </>
  );
}
