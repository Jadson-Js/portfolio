"use client";

import React from "react";
import { IProject } from "@/types/IProject";

export function useProjects() {
  const [projects] = React.useState<IProject[]>([
    {
      imageUrl: "/urbanify_cover.png",
      title: "Dev Space: Blog com SEO e Performance Máximas",
      subtitle:
        "Plataforma de conteúdo com foco em performance, SEO e independência tecnológica, usando Astro e um framework CSS proprietário.",
      overview:
        "Desenvolvi uma plataforma de conteúdo para um cliente com foco total em performance e SEO. Fui responsável por todo o projeto, do UI/UX Design ao código, garantindo uma solução escalável e sem dependência de ecossistemas fechados.",
      challenge:
        "O desafio era obter SEO e velocidade de ponta sem o aprisionamento tecnológico (vendor lock-in) de frameworks como Next.js. A renderização via JavaScript puro (CSR) não era uma opção viável para a indexação.",
      solution:
        "Utilizei Astro para gerar um site estático (HTML/CSS) de alta performance, com 'ilhas' de interatividade em React. Para otimizar ainda mais, criei um framework CSS do zero, eliminando código desnecessário e reduzindo drasticamente o tempo de carregamento.",
      features: [
        "Performance Extrema: Nota máxima em auditorias do Google Lighthouse, garantida pela arquitetura Astro e CSS otimizado.",
        "SEO de Alto Nível: Estrutura 100% otimizada e indexável para motores de busca.",
        "Sugestão de Conteúdo: Algoritmo que aumenta o engajamento do usuário sugerindo posts relacionados.",
        "Design Responsivo: Interface limpa e acessível, perfeita em qualquer dispositivo.",
      ],
      technologies: ["HTML", "Javascript", "Framework CSS Próprio", "Astro"],
      liveUrl: "https://meuportfolio.com",
      githubUrls: ["https://github.com/Jadson-Js/urbanify_backend", ""],
    },
  ]);

  return { projects };
}
