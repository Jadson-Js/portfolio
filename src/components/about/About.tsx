"use client";
import Image from "next/image";
import React from "react";
import { getCurrentSection } from "../../utils/getCurrentSection";

export function About() {
  React.useEffect(() => {
    getCurrentSection("about");
  }, []);

  return (
    <section
      id="about"
      className="bg-bg3  px-8 py-8 xl:px-20 md:py-16 min-h-screen flex items-center"
      style={{ backgroundImage: "url('/projects_bg.png')" }}
    >
      <div className="max-w-[1200px] container mx-auto grid grid-cols-1 gap-16  md:grid-cols-3">
        <article className="flex flex-col gap-8 col-span-2">
          <div className="bg-bg1 border-2  border-primary w-fit px-4 py-2 rounded-tl-3xl rounded-br-3xl">
            <h2 className="text-2xl">Sobre</h2>
          </div>

          <div className="bg-bg1 w-fit p-4 rounded-3xl flex flex-col gap-4">
            <span className="text-primary text-sm">&lt;p1&gt;</span>
            <div>
              <span className="text-2xl text-primary">Olá</span>
              <p className="text-slate-200 mb-2">
                Sou um{" "}
                <strong className="text-primary">
                  Desenvolvedor Full Stack
                </strong>{" "}
                com uma sede real por desafios que envolvem lógica. Minha stack
                gira em torno de{" "}
                <strong className="text-primary">TypeScript</strong>,{" "}
                <strong className="text-primary">Node</strong>,{" "}
                <strong className="text-primary">Next</strong>,
                <strong className="text-primary">PostgreSQL</strong>,{" "}
                <strong className="text-primary">MongoDB</strong>,{" "}
                <strong className="text-primary">DynamoDB</strong>,{" "}
                <strong className="text-primary">Jest</strong>,{" "}
                <strong className="text-primary">AWS</strong> e outras
                tecnologias modernas.
              </p>
              <p className="text-slate-200">
                Ao longo da minha trajetória profissional, tenho entregado
                produtos de alta qualidade com excelência, sempre atendendo às
                expectativas de meus clientes.
                <strong className="text-primary">
                  Mantenho-me em constante atualização
                </strong>{" "}
                e aprimoramento técnico, buscando evoluir continuamente e
                contribuir para o desenvolvimento de soluções robustas e bem
                estruturadas.
              </p>
            </div>
            <span className="text-primary text-sm">&lt;/p1&gt;</span>
          </div>
        </article>

        <div>
          <Image
            className="hidden rounded-xl h-full md:block  object-top"
            src="/about.jpg"
            alt="About Illustration"
            width={450}
            height={550}
          />
        </div>
      </div>
    </section>
  );
}
