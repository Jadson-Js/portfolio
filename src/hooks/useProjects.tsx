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
    {
      imageUrl: "/urbanify_cover.png",
      title: "Pronto Capacitação: Landing Page Adaptativa de Alta Conversão",
      subtitle:
        "Landing Page de alta performance para cliente de treinamentos, com design e conteúdo dinamicamente adaptáveis para públicos B2B e B2C.",
      overview:
        "Desenvolvi uma Landing Page para a Pronto Capacitação com foco absoluto em performance, SEO e, principalmente, versatilidade. O projeto foi concebido para atender tanto clientes corporativos (B2B) quanto o consumidor final (B2C) a partir de uma única base de código, garantindo uma experiência de usuário coesa e otimizada para ambos os públicos.",
      challenge:
        "O principal desafio técnico era fazer com que uma única página HTML se comportasse de maneiras distintas, alterando estrutura e conteúdo, sem duplicar código ou prejudicar o SEO. A solução precisava ser leve e eficiente para não comprometer a velocidade de carregamento.",
      solution:
        "A solução foi implementar um script em JavaScript que analisa a URL de entrada. Dependendo dos parâmetros presentes, ele identifica se o visitante busca um serviço corporativo ou um curso individual. Com base nessa identificação, o script manipula o DOM em tempo real para renderizar os elementos, textos e CTAs (Call to Actions) mais relevantes para cada público, criando uma experiência personalizada e altamente direcionada.",
      features: [
        "Métricas de Elite: Nota máxima na maioria dos parâmetros das auditorias do Google (Lighthouse), comprovando a excelência em Performance, Acessibilidade e SEO.",
        "Conteúdo Dinâmico B2B/B2C: A página se adapta automaticamente para exibir a oferta correta para empresas ou clientes finais.",
        "Design Responsivo: Interface elegante e funcional em qualquer dispositivo, do desktop ao smartphone.",
        "Animações Sutis: Microinterações e animações que guiam o usuário e melhoram a experiência sem impactar a performance.",
        "FAQ Interativo: Seção de perguntas frequentes para sanar dúvidas e reduzir a fricção na jornada do cliente.",
      ],
      technologies: ["HTML", "CSS", "Javascript"],
      liveUrl: "https://seusite.com/pronto-capacitacao",
      githubUrls: ["https://github.com/SeuUsuario/pronto-capacitacao", ""],
    },
    {
      imageUrl: "/urbanify_cover.png",
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
      liveUrl: "https://meuportfolio.com/urbanify",
      githubUrls: [
        "https://github.com/SeuUsuario/urbanify_backend",
        "https://github.com/SeuUsuario/urbanify_frontend",
      ],
    },
  ]);

  return { projects };
}
