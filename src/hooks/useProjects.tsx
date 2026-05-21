"use client";

import React from "react";
import { IProject } from "@/types/IProject";

export function useProjects() {
  const [projects] = React.useState<IProject[]>([
    {
      thumbnail: "/project_codedragon_thumbnail.png",
      video: "/project_codedragon_video.mp4",
      title: "CodeDragon – Mentor de Carreira Inteligente",
      subtitle:
        "Plataforma SaaS com IA para simulados técnicos, análise de performance e geração de roadmaps personalizados.",
      overview:
        "O CodeDragon é uma plataforma projetada para acelerar a evolução de desenvolvedores. Utilizando inteligência artificial, o sistema identifica lacunas de conhecimento e gera trilhas de estudo baseadas na performance em tempo real. A arquitetura foi desenvolvida em um mono-repositório, aplicando Clean Architecture no backend e um design orientado a features no frontend para garantir organização e escalabilidade.",
      challenge:
        "Mitigar a latência natural dos modelos de IA (LLMs) durante a geração de simulados para manter a experiência fluida. Além disso, estruturar a geração de conteúdo de forma escalável para abranger tanto tópicos generalistas quanto conceitos profundos de backend, como SQL e Event Loop.",
      solution:
        "Implementei um algoritmo de geração híbrida de simulados: um batch síncrono entrega as primeiras 5 questões imediatamente, enquanto o restante é processado de forma assíncrona em background usando BullMQ e Redis. As regras de negócio complexas foram isoladas através da Clean Architecture.",
      features: [
        "Simulados técnicos dinâmicos gerados por IA (Gemini Pro/GPT-4).",
        "Geração de questões otimizada com processamento assíncrono em lote.",
        "Análise de performance com identificação de lacunas de conhecimento.",
        "Roadmaps e trilhas de estudo geradas automaticamente.",
        "Gamificação com ranking, cálculo de percentil e pontuação.",
      ],
      technologies: [
        "TypeScript",
        "Node.js",
        "Express",
        "Prisma",
        "PostgreSQL",
        "BullMQ",
        "Redis",
        "Google Gemini Pro",
        "React 19",
        "Tailwind CSS 4",
        "TanStack Query",
      ],
      github: ["https://github.com/Jadson-Js/code_dragon"],
      live: "https://codedragon.vercel.app/",
    },
    {
      thumbnail: "/project_urbanify_thumbnail.png",
      video: "/project_urbanify_video.mp4",
      title: "Urbanify – Plataforma Cívica Inteligente",
      subtitle:
        "API, Web e Mobile para relatos urbanos com geolocalização, dashboard analítico e controle de custos na AWS.",
      overview:
        "O Urbanify conecta cidadãos à gestão municipal. Permite registrar problemas urbanos com fotos e localização precisa via apps iOS/Android. Gestores acessam um dashboard com mapas e gráficos. A arquitetura foi projetada para ser escalável e financeiramente segura.",
      challenge:
        "Dois pontos críticos: 1) Evitar duplicidade de relatos de um mesmo problema. 2) Impedir que picos de tráfego ou ataques gerassem custos altos na AWS.",
      solution:
        "Usei GeoHash para agrupar relatos próximos, reduzindo redundância no banco. Para os custos, implementei um 'circuit breaker' na AWS: ao atingir 99% do orçamento, um alarme acionava SNS + Lambda que desligava a instância EC2 automaticamente.",
      features: [
        "Multi-dispositivo: apps iOS/Android + portal web.",
        "Relatos com fotos e geolocalização.",
        "Dashboard com mapas e gráficos em tempo real.",
        "GeoHash para evitar duplicidade.",
        "Controle automático de custos na AWS.",
        "Sistema de notificações por e-mail.",
      ],
      technologies: [
        "Javascript",
        "Node.js",
        "React",
        "React Native",
        "AWS",
        "DynamoDB",
        "S3",
        "EC2",
        "SNS",
        "Lambda",
        "JWT",
        "OAuth2",
      ],
      github: [
        "https://github.com/Jadson-Js/urbanify_backend",
        "https://github.com/Jadson-Js/urbanify_frontend",
      ],
    },
    {
      thumbnail: "/project_blog_thumbnail.png",
      video: "/project_blog_video.mp4",
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
      live: "https://blog-c591vq8js-imperium-dev.vercel.app",
    },
  ]);

  return { projects };
}
