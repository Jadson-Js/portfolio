"use client";

import React from "react";
import { IProject } from "@/types/IProject";

export function useProjects() {
  const [projects] = React.useState<IProject[]>([
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
      thumbnail: "/project_filter_image_thumbnail.png",
      video: "/project_filter_image_video.mp4",
      title: "Filtro de Imagem em C (Harvard Challenge)",
      subtitle: "Processamento de imagens em baixo nível com manipulação direta de memória.",
      overview:
        "Desenvolvido como parte do desafiador curso CS50 de Harvard, este projeto consiste em um software escrito em C puro capaz de manipular arquivos de imagem no formato Bitmap (BMP). Diferente de abordagens modernas que utilizam bibliotecas prontas, aqui o foco foi entender 'o que acontece por baixo do capô': acessar os bytes brutos do processador, gerenciar alocação de memória e aplicar lógica matemática diretamente na matriz de pixels.",
      challenge:
        "O principal obstáculo foi a complexidade inerente à linguagem C: lidar com aritmética de ponteiros, alocação dinâmica de memória e a estrutura binária de arquivos BMP sem corromper os dados. Além disso, adotei uma regra rigorosa de 'Zero IA', forçando-me a deduzir e implementar a lógica matemática de inversão de cores e percorrimento de matrizes por conta própria para garantir o aprendizado real dos fundamentos.",
      solution:
        "Implementei um algoritmo que interpreta a imagem como uma matriz de estruturas de dados (pixels). O código navega pela memória utilizando ponteiros para acessar os canais RGB de cada pixel individualmente. Para o filtro de inversão, apliquei a lógica de subtrair o valor atual de cada canal pelo valor máximo (255), criando o efeito 'negativo'. A solução foca em eficiência de memória e precisão na manipulação dos bits.",
      features: [
        "Manipulação direta de arquivos binários (BMP)",
        "Gerenciamento manual de memória (malloc/free)",
        "Aritmética de ponteiros para navegação em matrizes",
        "Processamento de canais RGB pixel a pixel",
        "Algoritmo de inversão de cores (Filtro Negativo)"
      ],
      technologies: ["C",],
      github: ["https://github.com/Jadson-Js/filter_image"],
    },
    {
      thumbnail: "project_body_tracker_thumbnail.png",
      video: "/project_black_video.mp4",
      title: "Monitor de Postura com IA (MediaPipe)",
      subtitle: "Assistente ergonômico em tempo real utilizando Visão Computacional e Geometria.",
      overview:
        "Com o aumento do trabalho remoto, a má postura se tornou um problema silencioso. Este projeto é uma aplicação Python que utiliza a webcam para monitorar a ergonomia do usuário em tempo real. Diferente de soluções baseadas em hardware (wearables), utilizei Visão Computacional para mapear pontos biomecânicos do corpo e calcular desvios posturais matematicamente.",
      challenge:
        "O maior desafio foi garantir precisão em um ambiente não controlado. A detecção de landmarks sofre com variações de iluminação e qualidade da webcam (ruído). Além disso, transformar coordenadas 2D em uma análise de postura confiável exigiu lidar com a instabilidade dos sensores e definir limiares angulares que funcionassem para diferentes biotipos sem gerar falsos positivos constantes.",
      solution:
        "Integrei o modelo 'Pose Landmarker' do Google MediaPipe para extração robusta de 33 pontos corporais, processados via OpenCV. A lógica central utiliza a biblioteca NumPy para cálculo vetorial e trigonometria (atan2) entre ombro, quadril e joelho. O sistema opera em um loop de feedback visual imediato, alertando o usuário apenas quando desvios anatômicos críticos são detectados.",
      features: [
        "Detecção de esqueleto corporal em tempo real (30+ FPS)",
        "Cálculo trigonométrico de ângulos articulares",
        "Feedback visual imediato (Borda Vermelha/Verde)",
        "Processamento local (Privacidade total do vídeo)",
        "Arquitetura modular (Separação de Model/Utils/Main)"
      ],
      technologies: ["Python"],
      github: ["https://github.com/Jadson-Js/body_tracker"],
    }
  ]);

  return { projects };
}
