import { IProject } from "@/types/IProject";
import { FaGithub } from "react-icons/fa";
import { GrFormPrevious } from "react-icons/gr";
import { TbWorld } from "react-icons/tb";

export function Content({ project }: { project: IProject }) {
  const tecnologies = project.tecnologies.map((title, index) => {
    return (
      <li key={index}>
        <span className="text-xs uppercase rounded-3xl bg-bg3 px-2 py-1 border border-white">
          {title}
        </span>
      </li>
    );
  });

  return (
    <div className="fixed w-full h-full bg-black/40 top-0 left-0 z-20">
      <article className="fixed max-w-120 h-full bg-bg1 top-0 right-0 p-4 flex flex-col gap-6 ">
        <div className="border-b-2 border-bg2 pb-4">
          <GrFormPrevious className=" text-2xl rounded-full p-0.5  cursor-pointer border border-slate-200 text-slate-200" />
        </div>

        <div className="flex flex-col gap-2">
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

        <div className="flex flex-col gap-2">
          <h3 className="text-lg">Sobre</h3>
          <p className="text-gray-400 text-sm">{project.description}</p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg">Tecnologias</h3>
          <ul className="flex flex-row gap-2">{tecnologies}</ul>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex flex-row items-center gap-1 text-lg">
            <TbWorld />
            <h3 className="text-lg">Web Site</h3>
          </div>
          <p className="text-gray-400 text-sm">{project.liveUrl}</p>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex flex-row items-center gap-1 text-lg">
            <FaGithub />
            <h3 className="text-lg">GitHub</h3>
          </div>
          <p className="text-gray-400 text-sm">{project.liveUrl}</p>
        </div>

        <div className="absolute left-0 bottom-0 w-full bg-bg3 border-t-1 border-x-1 border-t-primary border-x-primary p-4 text-center rounded-tl-3xl rounded-tr-3xl">
          <h4>Abrir Projeto</h4>
        </div>
      </article>
    </div>
  );
}
