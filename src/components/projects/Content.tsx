import { IProject } from "@/types/IProject";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { GrFormPrevious } from "react-icons/gr";

interface ContentProps {
  project: IProject | null;
  setProject: (value: null) => void;
}

export function Content({ project, setProject }: ContentProps) {
  if (!project) return null;

  const Tecnologies = project.tecnologies.map((title, index) => {
    return (
      <li key={index}>
        <span className="text-xs uppercase rounded-3xl bg-bg3 px-2 py-1 border border-white">
          {title}
        </span>
      </li>
    );
  });

  const Github = project.githubUrls.map((url) => {
    return (
      <li key={url}>
        <Link href={url} target="_blank">
          <p className="text-gray-400 text-sm hover:text-primary transition-all">
            {url}
          </p>
        </Link>
      </li>
    );
  });

  return (
    <>
      <div
        className="fixed w-full h-full bg-black/40 top-0 left-0 z-20 transition-all cursor-pointer"
        onClick={() => setProject(null)}
      ></div>
      <section className="fixed max-w-150 h-full bg-bg1 top-0 right-0 px-4 py-2 flex flex-col gap-4 transition-all animate-slide-in-right z-30 overflow-y-auto overscroll-contain">
        <div
          className="border-b-2 border-bg2 pb-2"
          onClick={() => setProject(null)}
        >
          <GrFormPrevious className=" text-xl rounded-full p-0.5  cursor-pointer border border-slate-200 text-slate-200" />
        </div>

        <div className="flex flex-col ">
          <h3 className="text-2xl">{project.title}</h3>
          <p className="text-gray-400">{project.subTitle}</p>
        </div>

        <div
          className="max-h-50 bg-yellow-500 rounded-3xl flex-1 cursor-pointer  "
          style={{
            backgroundImage: `url(${project.imageUrl})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />

        <article className="flex flex-col gap-2">
          <h3 className="text-lg">Sobre</h3>
          <p className="text-gray-400 text-sm">{project.description}</p>
        </article>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg">Tecnologias</h3>
          <ul className="flex flex-row gap-2 flex-wrap">{Tecnologies}</ul>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex flex-row items-center gap-1 text-lg">
            <FaGithub />
            <h3 className="text-lg">GitHub</h3>
          </div>
          <ul className="flex flex-col gap-1">{Github}</ul>
        </div>

        <div className="absolute left-0 bottom-0 w-full bg-bg3 border-t-1 border-x-1 border-t-primary border-x-primary p-4 text-center rounded-tl-3xl rounded-tr-3xl">
          <h4>Abrir Projeto</h4>
        </div>
      </section>
    </>
  );
}
