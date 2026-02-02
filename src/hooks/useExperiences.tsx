"use client";

import React from "react";
import { IExperience } from "@/types/IExperience";

export function useExperiences() {
  const [experiences] = React.useState<IExperience[]>([
    {
      company: "Escribo",
      startDate: "Nov/25",
      endData: "Atual",
      role: "Desenvolvedor Backend | TypeScript | PostgreSQL | IA",
      description: [
        "Arquitetura Serverless: Desenvolvimento de Edge Functions otimizadas em Deno/TypeScript no ecossistema Supabase, focando em baixa latência.",
        "Database Engineering: Domínio avançado de PostgreSQL, movendo regras de negócio críticas para o banco via PL/pgSQL para eliminar gargalos de aplicação.",
        "Engenharia de IA & LLMs: Integro LLMs (OpenAI/Gemini) em funcionalidades de produção, aplicando o Model Context Protocol (MCP) e estratégias de Prompt Engineering para garantir respostas precisas e contextuais.",
        "Case de Sucesso: Otimização de um endpoint crítico de renderização de imagens. Ao refatorar o serviço para utilizar processamento em paralelo, quadrupliquei a capacidade de processamento, reduzindo drasticamente o tempo de espera do usuário."
      ],
    },
    {
      company: "Sagitta Digital Full Stack",
      startDate: "Jul/23",
      endData: "Jan/24",
      role: "Desenvolvedor (Júnior)",
      description: [
        "Desenvolvimento & Arquitetura: Construção de interfaces dinâmicas e backends robustos, garantindo a integridade da aplicação ponta a ponta.",
        "Integrações Complexas: Implementação e consumo de APIs RESTful e Gateways de Pagamento, assegurando transações seguras e fluxo de dados eficiente.",
        "Performance & Qualidade: Atuação ativa na refatoração de código, debugging e otimização de serviços para reduzir latência e melhorar a experiência do usuário (UX).",
        "Metodologia: Trabalho em ambiente ágil, colaborando com times multidisciplinares para entregar soluções adaptáveis a diferentes modelos de negócio."
      ],
    },
  ]);

  return { experiences };
}
