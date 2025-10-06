"use client";

import React from "react";
import { IProject } from "@/types/IProject";

export function useProjects() {
  const [projects] = React.useState<IProject[]>([
    {
      thumbnail: "/project_geocheck_thumbnail.png",
      video: "/project_geocheck_video.mp4",
      title: "GEOCHECK",
      subtitle:
        "Plataforma de Validação de Dados em Alta Performance para o Setor de Energia (EM ANDAMENTO)",
      overview:
        "Desenvolvendo uma solução de software sob medida para a CGB, uma das principais parceiras da Equatorial, a 3ª maior distribuidora de energia do Brasil. O GEOCHECK é uma plataforma projetada para processar e validar planilhas de grande volume — variando de 50 mil a mais de 150 mil registros — em questão de segundos. A ferramenta capacita os analistas a garantir a integridade dos dados com uma velocidade e precisão sem precedentes, otimizando um fluxo de trabalho crítico para as operações.",
      challenge:
        "O principal desafio técnico foi arquitetar um algoritmo de validação que não apenas performasse com extrema velocidade, mas também fosse robusto o suficiente para lidar com um fluxo massivo e constante de dados complexos. A solução exigia uma arquitetura que garantisse escalabilidade, consistência e tolerância a falhas, evitando gargalos no processamento.",
      solution:
        "Para superar o desafio, implementei uma arquitetura escalável utilizando padrões de projeto focados em performance, como o processamento assíncrono e a otimização de consultas. A lógica de validação foi desacoplada em um motor de regras flexível, permitindo que o sistema valide e reporte inconsistências em tempo real, transformando um processo demorado em uma tarefa de segundos.",
      features: [
        "Motor de Validação de Alta Velocidade",
        "Processamento de Planilhas em Lote (.xlsx, .csv)",
        "Relatórios de Erros Detalhados por Célula",
        "Dashboard de Análise e Histórico de Validações",
        "Interface Intuitiva para Analistas",
      ],
      technologies: ["Next", "Typescript", "Tailwind", "HTML"],
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
      live: "https://mypersonalblog12.netlify.app/",
    },
    {
      thumbnail: "/project_prontocapacitacao_thumbnail.png",
      video: "/project_prontocapacitacao_video.mp4",
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
      //live: "https://prontocapacitacao.com.br/",
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
      live: "https://meuportfolio.com/urbanify",
      github: [
        "https://github.com/SeuUsuario/urbanify_backend",
        "https://github.com/SeuUsuario/urbanify_frontend",
      ],
    },
    {
      thumbnail: "/project_tjcompany_thumbnail.png",
      video: "/project_tjcompany_video.mp4",
      title: "TJ Studios: Empreendedorismo e Tecnologia na Fotografia",
      subtitle:
        "Cofundador e líder técnico de uma agência de fotografia, responsável por desenvolver a tecnologia que otimiza a gestão e a captação de clientes.",
      overview:
        "Como um dos sócios fundadores da TJ Studios, atuo como a força motriz por trás de toda a tecnologia da agência. Minha responsabilidade é conceber e desenvolver soluções digitais que nos diferenciam no mercado, desde a prospecção de clientes até a gestão interna. Lidero ativamente a iniciativa de transformar um negócio tradicional de fotografia em uma operação moderna e escalável através da inovação.",
      challenge:
        "O principal desafio foi empreender em um mercado competitivo com recursos financeiros limitados e sem uma vasta experiência prévia em gestão de negócios. Era crucial encontrar uma maneira de validar nossas ideias de forma rápida e barata, minimizando os riscos e maximizando o aprendizado.",
      solution:
        "Adotei princípios de gestão empresarial ágil, inspirados em metodologias como a do livro 'A Startup Enxuta'. Criei um processo interno para validar nossas hipóteses de negócio com baixo custo. O primeiro passo prático foi desenvolver uma Landing Page de alta conversão para captar os primeiros clientes. Atualmente, estou liderando o desenvolvimento de um CRM proprietário, projetado do zero e baseado nas melhores ferramentas do mercado internacional, mas totalmente customizado para as necessidades e o fluxo de trabalho do mercado fotográfico.",
      features: [
        "Metodologia de Validação Ágil: Aplicação de conceitos de Lean Startup para testar e iterar sobre as ideias de negócio com eficiência.",
        "Landing Page de Captação: Portal web focado em conversão para apresentar os serviços e gerar leads qualificados.",
        "CRM Customizado para Fotógrafos: Sistema de gestão em desenvolvimento, projetado para otimizar o fluxo de trabalho, desde o primeiro contato até a entrega final ao cliente.",
        "Liderança Técnica e de Produto: Responsável pela visão estratégica, concepção e execução de todas as ferramentas tecnológicas da agência.",
      ],
      technologies: ["HTML", "Tailwind", "Javascript"],
      //live: "https://jadson-js.github.io/tj_company/dist/",
      github: ["https://github.com/Jadson-Js/tj_studios_b"],
    },
    {
      thumbnail: "/project_cashbox_thumbnail.png",
      video: "/project_cashbox_video.mp4",
      title: "Cashbox: Aplicativo de Gestão Financeira Pessoal",
      subtitle:
        "Aplicativo mobile de estudo para planejamento financeiro, desenvolvido com React Native e TypeScript.",
      overview:
        "Cashbox é um projeto de estudo concebido para aplicar e aprofundar meus conhecimentos em desenvolvimento mobile. O aplicativo permite que o usuário realize um planejamento financeiro completo, registrando suas receitas e despesas de forma intuitiva e visualizando sua saúde financeira através de um dashboard interativo.",
      challenge:
        "O principal desafio foi a produção de um aplicativo mobile utilizando uma stack tecnológica com a qual eu não tinha domínio prévio: React Native e TypeScript. O objetivo era sair da zona de conforto e aprender a construir uma aplicação robusta e tipada do zero.",
      solution:
        "Dediquei-me a um período de estudo focado na documentação oficial e em boas práticas de mercado para ambas as tecnologias. Desenvolvi o projeto de forma incremental, aplicando os conceitos aprendidos na prática para construir cada funcionalidade, desde a estrutura inicial até a implementação de um sistema de autenticação seguro.",
      features: [
        "CRUD Financeiro Completo: O usuário pode criar, ler, atualizar e deletar todas as suas transações financeiras (receitas e despesas).",
        "Dashboard Interativo: Gráficos e resumos visuais que apresentam o balanço financeiro do usuário de forma clara e objetiva.",
        "Autenticação Segura com JWT: Sistema de cadastro e login de usuários utilizando JSON Web Tokens, com implementação de refresh token para manter o usuário conectado de forma segura.",
        "Interface Intuitiva: Foco em uma experiência de usuário limpa e direta para facilitar a gestão das finanças no dia a dia.",
      ],
      technologies: ["React Native", "TypeScript", "Styled-Components"],
      //live: "",
      github: [
        "https://github.com/Jadson-Js/cashbox_frontend",
        "https://github.com/Jadson-Js/cashbox_backend",
      ],
    },
    {
      thumbnail: "/project_bikcraft_thumbnail.png",
      video: "/project_bikcraft_video.mp4",
      title: "Bikcraft: Website Responsivo para Bicicletas Customizadas",
      subtitle:
        "Projeto de estudo baseado no renomado curso da Origamid, focado em HTML semântico, CSS avançado e JavaScript para interatividade.",
      overview:
        "Desenvolvi uma versão completa do website Bikcraft, um projeto amplamente reconhecido na comunidade de desenvolvimento front-end. A aplicação é uma vitrine digital para uma marca de bicicletas elétricas personalizadas, com páginas detalhadas para produtos, seguros, e contato. O foco foi construir uma interface pixel-perfect, responsiva e com código limpo e bem estruturado.",
      challenge:
        "O desafio principal foi aplicar com precisão os fundamentos do desenvolvimento web moderno. Isso incluiu a estruturação correta do conteúdo com HTML semântico, a criação de layouts complexos e fluidos utilizando CSS Grid e Flexbox, e a adição de interatividade de forma performática com JavaScript puro, sem o uso de frameworks.",
      solution:
        "Seguindo as melhores práticas ensinadas, construí cada componente do zero. Utilizei HTML5 para garantir a semântica e acessibilidade. O CSS foi organizado de forma modular, com uso intensivo de Grid Layout e Flexbox para total controle sobre o design responsivo. O JavaScript foi implementado para manipular o DOM, criando funcionalidades como um menu mobile, uma galeria de imagens interativa e um sistema de navegação suave (smooth scrolling).",
      features: [
        "Design Totalmente Responsivo: Experiência de usuário consistente e otimizada para desktops, tablets e smartphones.",
        "HTML5 Semântico: Código bem estruturado que melhora o SEO e a acessibilidade da página.",
        "CSS Avançado: Layouts complexos construídos com CSS Grid e Flexbox, demonstrando domínio das ferramentas de posicionamento modernas.",
        "Interatividade com JavaScript Puro: Funcionalidades como galeria de imagens, menu mobile e animações, desenvolvidas sem dependência de bibliotecas externas.",
        "Otimização de Performance: Foco em carregar apenas os assets necessários para garantir um site rápido e eficiente.",
      ],
      technologies: ["HTML", "CSS", "Javascript"],
      live: "https://jadson-js.github.io/bikcraft/",
      github: ["https://github.com/Jadson-Js/bikcraft"],
    },
  ]);

  return { projects };
}
