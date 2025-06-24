"use client";

import React from "react";
import { IProject } from "@/types/IProject";

export function useProjects() {
  const [projects] = React.useState<IProject[]>([
    {
      title: "Urbanify",
      subTitle: "Sistema de gestão urbana",
      imageUrl: "/urbanify_cover.png",
      description:
        "Sistema completo incluindo Apps, Site e API. Permitia os cidadãos registrarem irregularidades com upload de fotos e geolocalização. A prefeitura acessava um dashboard interativo com gráficos em tempo real. Para garantir escalabilidade, o sistema utilizava tecnologia de hash nas coordenadas e contava com filas para envio automatizado de e-mails.",
      tecnologies: [
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
      liveUrl: "https://meuportfolio.com",
      githubUrls: ["https://github.com/Jadson-Js/urbanify_backend", ""],
    },
    {
      title: "Cashbox",
      subTitle: "App de gestão financeira pessoal",
      imageUrl: "/project.jpg",
      description:
        "Esse projeto foi construído para ajudar usuários a gerenciar suas finanças pessoais de forma prática e intuitiva. O sistema permite o registro de despesas e receitas, categorização personalizada e geração de relatórios visuais. Implementei autenticação segura, TailwindCSS, integração com MySQL via Prisma e uma arquitetura de código modular seguindo boas práticas",
      tecnologies: ["Typescript", "Node", "React Native", "Prisma", "JWT"],
      liveUrl: "https://taskmaster-app.web.app",
      githubUrls: [
        "https://github.com/DiegoLeandro477/Urbanify_Web",
        "https://github.com/Jadson-Js/cashbox_backend",
      ],
    },
    {
      title: "Bikcraft",
      subTitle: "Landing Page para Loja de Bicicletas",
      imageUrl: "/project.jpg",
      description:
        "Desafio pessoal focado em desenvolver uma e-commerce sem o uso de frameworks ou bibliotecas, utilizando apenas HTML5 e CSS3. A proposta simula a página de uma loja de bicicletas, com layout responsivo. Implementei seções como vitrine de produtos, fluxo de checkout visual, tudo desenvolvido na mão, reforçando minha atenção a detalhes e domínio da base da web.",
      tecnologies: ["HTML", "CSS"],
      liveUrl: "https://taskmaster-app.web.app",
      githubUrls: ["https://github.com/Jadson-Js/bikcraft"],
    },
    {
      title: "Dog",
      subTitle: "Rede social nichada em imagens",
      imageUrl: "/project.jpg",
      description:
        "Criei uma rede social onde os perfis, podem comentar, curtir fotos e interagir. Desenvolvi front e back-end com autenticação, feed, comentários e banco de dados. Projeto focado em experiência do usuário e boa estrutura de código.",
      tecnologies: [
        "Typescript",
        "Node",
        "Express",
        "MongoDB",
        "JWT",
        "Mongoose",
        "Next",
        "TailwindCSS",
      ],
      liveUrl: "https://taskmaster-app.web.app",
      githubUrls: ["https://github.com/Jadson-Js/dogs"],
    },
    {
      title: "Modeva",
      subTitle: "E-commerce",
      imageUrl: "/project.jpg",
      description:
        "Desenvolvi um e-commerce completo para venda de roupas, com catálogo de produtos, carrinho, checkout com integração de pagamento e painel de administração. Atuei no front e back-end, focando em performance, usabilidade e segurança. Utilizei Clean Architecture, TDD, SOLID.",
      tecnologies: [
        "Typescript",
        "Node",
        "Express",
        "MongoDB",
        "JWT",
        "Mongoose",
        "Next",
        "TailwindCSS",
      ],
      liveUrl: "https://taskmaster-app.web.app",
      githubUrls: ["https://github.com/Jadson-Js/dogs"],
    },
    {
      title: "TJ Company",
      subTitle: "Landing Page - Agência de Fotografia",
      imageUrl: "/project.jpg",
      description:
        "Criei uma landing page responsiva para uma agência de fotografia, com foco em conversão de clientes. Desenvolvi seções de portfólio, formulário de contato, integração com WhatsApp e animações leves para destacar os serviços.",
      tecnologies: ["HTML", "TailwindCSS", "CSS", "Javascript"],
      liveUrl: "https://taskmaster-app.web.app",
      githubUrls: ["https://github.com/Jadson-Js/lp_tjcompany"],
    },
  ]);

  return { projects };
}
