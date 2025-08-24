"use client";

import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { TitleSection } from "../TitleSection";
import { Card } from "./Card";

import React from "react";
import { useProjects } from "@/hooks/useProjects";
import { usePagination } from "@/hooks/usePagination";
import { Content } from "./Content";
import { getCurrentSection } from "../../utils/getCurrentSection";
import { useProject } from "@/context/ProjectContext";

export function Projects() {
  const { setProject } = useProject();
  const { projects } = useProjects();
  const { paginatedItems, next, previous, currentPage } = usePagination(
    projects,
    3,
  );

  const projectsMobile = () => {
    return projects.map((project, index) => (
      <div
        key={index}
        onClick={() => setProject(project)}
        className="block xl:hidden min-w-70"
      >
        <Card project={project} />
      </div>
    ));
  };

  const projectsDesktop = () => {
    const cards = paginatedItems.map((project, index) => (
      <div
        key={`${currentPage}-${index}`} // Key única por página
        onClick={() => setProject(project)}
        className="hidden xl:block animate-fade-in w-full"
        style={{
          animationDelay: `${index * 100}ms`, // Stagger effect
        }}
      >
        <Card project={project} />
      </div>
    ));

    return <div className="flex flex-row gap-4">{cards}</div>;
  };

  React.useEffect(() => {
    getCurrentSection("projects");
  }, []);

  return (
    <section
      id="projects"
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

        <div className="flex flex-row justify-start items-center gap-4 overflow-x-auto overflow-y-hidden pb-4 md:gap-8 xl:justify-center">
          <GrFormPrevious
            className="hidden xl:block text-5xl bg-bg1 rounded-full p-1 shrink-0 hover:bg-bg3 cursor-pointer transition-all"
            onClick={previous}
          />

          {projectsMobile()}
          <div className="flex-1">{projectsDesktop()}</div>

          <GrFormNext
            className="hidden xl:block text-5xl bg-bg1 rounded-full p-1 shrink-0 hover:bg-bg3 cursor-pointer transition-all"
            onClick={next}
          />
        </div>

        <Content />
      </div>
    </section>
  );
}
