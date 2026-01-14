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
        "Arquitetura Serverless & Supabase: Implementação de soluções backend escaláveis utilizando o ecossistema Supabase, desenvolvendo Edge Functions otimizadas em Deno/TypeScript.",
        "Engenharia de Dados (PostgreSQL): Desenvolvo a arquitetura de banco de dados e lógicas avançadas via PL/pgSQL, eliminando gargalos de performance e otimizando queries críticas para suportar operações complexas.",
        "Engenharia de IA & LLMs: Integro LLMs (OpenAI/Gemini) em funcionalidades de produção, aplicando o Model Context Protocol (MCP) e estratégias de Prompt Engineering para garantir respostas precisas e contextuais.",
        "Desenvolvimento & Decisões Técnicas: Atuo ativamente na definição da arquitetura técnica de novas features, assegurando a entrega de código limpo e manutenível."
      ],
    },
    {
      company: "Saggita Digital",
      startDate: "Jul/23",
      endData: "Jan/24",
      role: "Desenvolvedor (Júnior)",
      description: [
        "Desenvolvimento de E-commerce B2B: Liderei a construção de módulos críticos para uma plataforma de vestuário, incluindo a integração de Gateways de Pagamento Asaas, garantindo transações seguras e gestão de assinaturas recorrentes.",
        "Sistema de Gestão Escolar: Atuei no ciclo completo de desenvolvimento de um ERP escolar, focando na criação de interfaces responsivas.",
        "Colaboração & Documentação: Traduzi requisitos de negócio e designs complexos em funcionalidades viáveis, além de criar documentação técnica detalhada para facilitar o onboarding de novos desenvolvedores, usuarios e manutenção futura."
      ],
    },
  ]);

  return { experiences };
}
