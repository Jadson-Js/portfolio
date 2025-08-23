"use client";

import React from "react";
import { IExperience } from "@/types/IExperience";

export function useExperiences() {
  const [experiences] = React.useState<IExperience[]>([
    {
      company: "Saggita Digital",
      startDate: "Jul/23",
      endData: "Jan/24",
      role: "Desenvolvedor (Júnior)",
      description: [
        "Interfaces customizadas conforme requisitos.",
        "APIs e gateway de pagamento integrados.",
        "Testes rigorosos garantindo qualidade.",
        "Bugs corrigidos e performance otimizada.",
        "Sistema mantido e evoluído via feedback.",
        "Parceria com design em soluções viáveis.",
        "Segurança full‑stack: autenticação e proteção.",
        "Algoritmo dinâmico de grades para e‑commerce.",
      ],
    },
    {
      company: "Digital Labs",
      startDate: "Mai/23",
      endData: "Jun/23",
      role: "Desenvolvedor (Estágiario)",
      description: [
        "Funcionalidades críticas desenvolvidas e mantidas em produção.",
        "Resolução ágil de problemas com proatividade.",
        "Implementação de funcionalidades de alto impacto desde o início.",
        "Componente drag‑and‑drop estilo Trello para usabilidade.",
        "Documentação técnica para APIs e processos internos.",
        "Levantamento de requisitos e tradução em specs técnicas.",
        "Análise e integração de APIs de e‑mail marketing.",
      ],
    },
  ]);

  return { experiences };
}
