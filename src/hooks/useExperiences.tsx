"use client";

import React from "react";
import { IExperience } from "@/types/IExperience";

export function useExperiences() {
  const [experiences] = React.useState<IExperience[]>([
    {
      company: "Saggita Digital",
      startDate: "Jan/23",
      endData: "Jan/24",
      role: "Desenvolvedor No-Code (Júnior)",
      description: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae",
      ],
    },
    {
      company: "Digital Labs",
      startDate: "Jan/23",
      endData: "Jan/24",
      role: "Desenvolvedor No-Code (Estágiario)",
      description: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae",
      ],
    },
  ]);

  return { experiences };
}
