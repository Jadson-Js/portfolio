"use client";

import React from "react";
import { IProject } from "@/types/IProject";

export function useProjects() {
  const [projects] = React.useState<IProject[]>([
    {
      id: 1,
      title: "DevPortfolio",
      subTitle: "Portfólio Pessoal",
      imageUrl: "/project.jpg",
      description:
        "Um site pessoal responsivo para mostrar meus projetos e experiência como desenvolvedor.",
      tecnologies: ["React", "Tailwind CSS", "TypeScript"],
      liveUrl: "https://meuportfolio.com",
      githubUrl: "https://github.com/seuuser/dev-portfolio",
    },
    {
      id: 2,
      title: "TaskMaster",
      subTitle: "Gerenciador de Tarefas",
      imageUrl: "/project.jpg",
      description:
        "Aplicação web para criar, editar e acompanhar tarefas do dia a dia com login de usuário.",
      tecnologies: ["Vue.js", "Firebase", "Pinia"],
      liveUrl: "https://taskmaster-app.web.app",
      githubUrl: "https://github.com/seuuser/taskmaster",
    },
    {
      id: 3,
      title: "NutriCalc",
      subTitle: "Calculadora Nutricional",
      imageUrl: "/project.jpg",
      description:
        "Ferramenta que gera planos alimentares com base em dados nutricionais e metas do usuário.",
      tecnologies: ["Next.js", "Zustand", "Tailwind", "Prisma"],
      liveUrl: "https://nutricalc.dev",
      githubUrl: "https://github.com/seuuser/nutricalc",
    },
    {
      id: 4,
      title: "EcoMarket",
      subTitle: "E-commerce Sustentável",
      imageUrl: "/project.jpg",
      description:
        "Loja virtual com foco em produtos ecológicos, com carrinho, checkout e painel administrativo.",
      tecnologies: ["React", "Redux Toolkit", "Node.js", "MongoDB"],
      liveUrl: "https://ecomarket.shop",
      githubUrl: "https://github.com/seuuser/ecomarket",
    },
    {
      id: 5,
      title: "DevChat",
      subTitle: "Chat em Tempo Real",
      imageUrl: "/project.jpg",
      description:
        "Aplicação de chat com autenticação e salas públicas e privadas, usando WebSockets.",
      tecnologies: ["React", "Socket.IO", "Express", "PostgreSQL"],
      liveUrl: "https://devchat.app",
      githubUrl: "https://github.com/seuuser/devchat",
    },
    {
      id: 6,
      title: "ReportaAí",
      subTitle: "Sistema de Denúncias Urbanas",
      imageUrl: "/project.jpg",
      description:
        "Plataforma onde cidadãos podem reportar problemas em vias públicas, com gráficos e painel de atendimento.",
      tecnologies: ["Vue.js", "TypeScript", "D3.js", "Django"],
      liveUrl: "https://reportai.com",
      githubUrl: "https://github.com/seuuser/reportai",
    },
  ]);

  return { projects };
}
