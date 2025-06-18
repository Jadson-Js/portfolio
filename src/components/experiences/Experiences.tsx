"use client";
import { useExperiences } from "@/hooks/useExperiences";
import { TitleSection } from "../TitleSection";
import { Card } from "./Card";

export function Experiences() {
  const { experiences } = useExperiences();

  return (
    <section
      className="bg-bg3  px-8 py-8 xl:px-20 md:py-16 min-h-screen flex items-center"
      style={{
        backgroundImage: "url('/about_bg.svg')",
      }}
    >
      <div className="max-w-[1200px] container mx-auto flex flex-col justify-center">
        <div className="flex flex-col justify-center items-center text-center gap-4 mb-8">
          <TitleSection title="Experiências profissionais" />

          <p className="text-slate-200">
            Aplicações web e mobile desenvolvidas ao longo da minha jornada como
            desenvolvedor.
          </p>
        </div>

        <div className="flex flex-col gap-8 md:flex-row">
          {experiences.map((experience, index) => {
            return <Card key={index} {...experience} />;
          })}
        </div>
      </div>
    </section>
  );
}
