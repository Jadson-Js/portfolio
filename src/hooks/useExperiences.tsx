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
        "Desenvolvimento e manutenção de APIs REST utilizando Node.js e TypeScript",
        "Implementação e otimização de consultas em PostgreSQL",
        "Integração com APIs externas e serviços de terceiros",
        "Correção de bugs e melhoria de desempenho em endpoints críticos",
        "Colaboração com equipe em ambiente ágil (Scrum/Kanban)",
        "Apoio na definição de soluções técnicas e revisão de código",
        "Case de Sucesso: Otimização de um endpoint crítico de renderização de imagens. Ao refatorar o serviço para utilizar processamento em paralelo, quadrupliquei a capacidade de processamento, reduzindo drasticamente o tempo de espera do usuário.",
      ],
    },
  ]);

  return { experiences };
}
