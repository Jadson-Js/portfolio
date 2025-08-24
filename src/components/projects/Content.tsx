import { useProject } from "@/context/ProjectContext";
import { IProject } from "@/types/IProject";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { GrFormPrevious } from "react-icons/gr";

export function Content() {
  const { project, setProject } = useProject();

  if (!project) return null;

  return (
    <>
      {/* Overlay para fechar */}
      <div
        className="fixed w-full h-full bg-black/40 top-0 left-0 z-20 transition-all cursor-pointer"
        onClick={() => setProject(null)}
      ></div>

      {/* Sidebar */}
      <section className="fixed max-w-150 h-full bg-bg1 top-0 right-0 flex flex-col transition-all animate-slide-in-right z-30">
        {/* 1. CABEÇALHO (não rola) */}
        <header className="border-b-2 border-bg2 p-4">
          {/* Botão semântico para acessibilidade */}
          <button
            type="button"
            onClick={() => setProject(null)}
            aria-label="Fechar detalhes do projeto"
            className="flex items-center justify-center"
          >
            <GrFormPrevious className="text-xl rounded-full p-0.5 cursor-pointer border border-slate-200 text-slate-200" />
          </button>
        </header>

        {/* 2. CONTEÚDO PRINCIPAL (com scroll) */}
        {/* Adicionado 'overflow-y-auto' para criar a barra de rolagem quando necessário */}
        <main className="flex-1 flex flex-col gap-8 px-4 py-8 overflow-y-auto">
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl">{project.title}</h3>
            <p className="text-gray-400">{project.subtitle}</p>
          </div>

          <video
            autoPlay
            muted
            loop
            playsInline
            className={`min-w-70 h-80  rounded-xl flex-1 cursor-pointer transition-all relative group`}
          >
            <source src={project.video} type="video/mp4" />
            Seu navegador não suporta vídeos.
          </video>

          <article className="flex flex-col gap-2">
            <h3 className="text-lg">Sobre</h3>
            <p className="text-gray-400 text-sm">{project.overview}</p>
          </article>

          <article className="flex flex-col gap-2">
            <h3 className="text-lg">Desafios</h3>
            <p className="text-gray-400 text-sm">{project.challenge}</p>
          </article>

          <article className="flex flex-col gap-2">
            <h3 className="text-lg">Solução</h3>
            <p className="text-gray-400 text-sm">{project.solution}</p>
          </article>

          <article className="flex flex-col gap-2">
            <h3 className="text-lg">Funcionalidades</h3>
            <ul className="flex flex-col gap-2 list-disc list-inside">
              {project.features.map((feature, index) => (
                <li key={index} className="">
                  <span className="text-gray-400 text-sm inline">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </article>

          <div className="flex flex-col gap-2">
            <h3 className="text-lg">Tecnologias</h3>
            <ul className="flex flex-row gap-2 flex-wrap">
              {project.technologies.map((title, index) => {
                return (
                  <li key={index}>
                    <span className="text-xs uppercase rounded-3xl bg-bg3 px-2 py-1 border border-white">
                      {title}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex flex-row items-center gap-1 text-lg">
              <FaGithub />
              <h3 className="text-lg">GitHub</h3>
            </div>
            <ul className="flex flex-col gap-1">
              {project.github &&
                project.github.map((url) => {
                  return (
                    <li key={url}>
                      <Link href={url} target="_blank">
                        <p className="text-gray-400 text-sm hover:text-primary transition-all">
                          {url}
                        </p>
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </div>
        </main>

        {/* 3. RODAPÉ (não rola) */}
        <footer className="w-full bg-bg3 border-t-1 border-x-1 border-t-primary border-x-primary p-4 text-center rounded-tl-3xl rounded-tr-3xl">
          {/* Usar <a> se for um link ou <button> se for uma ação */}
          <a
            href={project.live} // Supondo que você tenha a URL do projeto
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full" // 'block' para o link ocupar todo o espaço do pai
          >
            <h4>Abrir Projeto</h4>
          </a>
        </footer>
      </section>
    </>
  );
}
