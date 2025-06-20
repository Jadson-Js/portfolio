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
  const [isMobile, setIsMobile] = React.useState(false);

  // Effect para detectar mudanças de tamanho de tela
  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");

    // Define o estado inicial
    setIsMobile(mediaQuery.matches);

    // Handler para mudanças na media query
    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    // Adiciona o listener
    mediaQuery.addEventListener("change", handleMediaChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  // Effect principal que depende do estado isMobile
  React.useEffect(() => {
    if (isMobile) {
      // No mobile, restaura o scroll normal e remove listeners
      document.body.style.overflow = "auto";
      return;
    }

    // No desktop, aplica a lógica de scroll personalizado
    document.body.style.overflow = "hidden";

    const handleWheel = (e: WheelEvent) => {
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

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [isMobile, isMoving.status]); // Agora depende de isMobile também

  React.useEffect(() => {
    if (!isMoving.status || isMobile) return; // Não executa no mobile

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
      sectionTarget.current += isMoving.direction;
    }
  }, [isMoving.status, isMobile]);

  React.useEffect(() => {
    if (isMobile) return; // Não executa scroll personalizado no mobile

    const el = document.getElementById(sectionsName[sectionTarget.current]);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [sectionTarget.current, isMobile]);

  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />

        <About />

        <Projects />

        <Experiences />

        <Contact />

        <Sidebar sectionTarget={sectionTarget} />
        <Whatsapp />
      </main>
      <Footer />
    </>
  );
}
