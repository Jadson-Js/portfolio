"use client";

import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { TitleSection } from "../TitleSection";
import { Card } from "./Card";

import React from "react";
import { useProjects } from "@/hooks/useProjects";
import { usePagination } from "@/hooks/usePagination";
import { Content } from "./Content";
import { IProject } from "@/types/IProject";

export function Projects() {
  const { projects } = useProjects();
  const { paginatedItems, next, previous } = usePagination(projects, 3);
  const [project, setProject] = React.useState<IProject | null>(null);

  const projectsMobile = () => {
    return projects.map((project, index) => (
      <div
        key={index}
        onClick={() => setProject(project)}
        className="block xl:hidden"
      >
        <Card project={project} />
      </div>
    ));
  };

  const projectsDesktop = () => {
    return paginatedItems.map((project, index) => (
      <div
        key={index}
        onClick={() => setProject(project)}
        className="hidden xl:block"
      >
        <Card project={project} />
      </div>
    ));
  };

  return (
    <section
      className="bg-bg3  px-8 py-8 xl:px-20 md:py-16 min-h-screen flex items-center bg-cover relative"
      style={{ backgroundImage: "url('/projects_bg.png')" }}
    >
      <div className="max-w-[1200px] container mx-auto flex flex-col justify-center">
        <div className="flex flex-col justify-center items-center text-center gap-4 mb-8">
          <TitleSection title="Projetos" />

          <p className="text-slate-200">
            Aplicações web e mobile desenvolvidas ao longo da minha jornada como
            desenvolvedor.
          </p>
        </div>

        <div className="flex flex-row justify-center items-center gap-4 overflow-x-auto pb-4 md:gap-8 ">
          <GrFormPrevious
            className="hidden xl:block text-5xl bg-bg1 rounded-full p-1 shrink-0 hover:bg-bg3 cursor-pointer transition-all"
            onClick={previous}
          />

          {projectsMobile()}
          {projectsDesktop()}

          <GrFormNext
            className="hidden xl:block text-5xl bg-bg1 rounded-full p-1 shrink-0 hover:bg-bg3 cursor-pointer transition-all"
            onClick={next}
          />
        </div>

        <Content project={project} setProject={setProject} />
      </div>
    </section>
  );
}
