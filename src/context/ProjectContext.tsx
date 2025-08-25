"use client";

import { IProject } from "@/types/IProject";
import React, { createContext, useContext } from "react";

export interface IProjectContext {
  project: IProject | null;
  setProject: React.Dispatch<React.SetStateAction<IProject | null>>;
}

const ProjectContext = createContext<IProjectContext | null>(null);

export function ProjectProvider({ children }: { children: React.ReactNode }) {
  const [project, setProject] = React.useState<IProject | null>(null);

  return (
    <ProjectContext.Provider value={{ project, setProject }}>
      {children}
    </ProjectContext.Provider>
  );
}

export function useProject() {
  const context = useContext(ProjectContext);

  if (!context) {
    throw new Error("useProject deve ser usado dentro de um ProjectProvider");
  }

  return context;
}
