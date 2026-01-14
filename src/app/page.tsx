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
import { useProject } from "@/context/ProjectContext";

import React from "react";

export default function Home() {
  const { project } = useProject();
  const [isMobile, setIsMobile] = React.useState(false);
  const [currentSection, setCurrentSection] = React.useState(0);
  const isWheelingRef = React.useRef(false);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  // Efeito para detectar mudanças de tamanho de tela (pode manter o seu)
  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaChange = (e: MediaQueryListEvent) =>
      setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handleMediaChange);
    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  // Efeito que gerencia o evento de 'wheel' (scroll do mouse)
  React.useEffect(() => {
    // Se for mobile, a lógica customizada é desativada
    if (isMobile) {
      document.body.style.overflow = "auto";
      return;
    }

    // No desktop, o overflow é escondido para controlarmos o scroll
    document.body.style.overflow = "hidden";

    const handleWheel = (e: WheelEvent) => {
      // Previne o comportamento padrão do scroll do navegador

      //  e.preventDefault();

      // Se um scroll já estiver em andamento (cooldown), ignora este evento
      if (isWheelingRef.current) {
        return;
      }

      const direction = e.deltaY > 0 ? 1 : -1; // 1 para baixo, -1 para cima
      const nextSection = currentSection + direction;

      // Verifica se a próxima seção está dentro dos limites (de 0 a 4)
      if (nextSection >= 0 && nextSection < sectionsName.length) {
        setCurrentSection(nextSection);
        isWheelingRef.current = true; // Ativa o cooldown para evitar scrolls múltiplos
      }
    };

    if (!project) {
      window.addEventListener("wheel", handleWheel, { passive: false });
    }
    // Função de limpeza para remover o listener
    return () => {
      window.removeEventListener("wheel", handleWheel);
      document.body.style.overflow = "auto"; // Garante que o scroll normal seja restaurado
    };
  }, [isMobile, currentSection, project]); // O efeito depende de 'isMobile' e 'currentSection'

  // Efeito que executa o scroll suave para a seção atual
  React.useEffect(() => {
    if (isMobile || project) return;

    const el = document.getElementById(sectionsName[currentSection]);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });

      // Limpa qualquer timeout anterior para garantir que apenas o último seja válido
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Define um timeout para resetar o cooldown após a animação de scroll
      timeoutRef.current = setTimeout(() => {
        isWheelingRef.current = false;
      }, 100); // 800ms é um bom tempo de espera para a animação terminar
    }

    // Função de limpeza para o timeout
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentSection, isMobile, project]); // Este efeito roda sempre que a seção alvo muda

  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Experiences />
        <Projects />
        <Contact />
        <Sidebar sectionTarget={{ current: currentSection }} />{" "}
        {/* Passe o estado atual para a Sidebar */}
        <Whatsapp />
      </main>
      <Footer />
    </>
  );
}
