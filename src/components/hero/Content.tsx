"use client";
import { MdEmail } from "react-icons/md";
import { scroll } from "../../utils/scroll";

export function Content() {
  return (
    <article className="flex flex-col gap-8">
      <div>
        <span className="text-primary text-sm">&lt;h1&gt;</span>

        <h2 className="text-2xl md:text-4xl">
          Eu sou <span className="text-primary">Jadson</span>, <br /> Full Stack
          Developer <span className="text-primary text-sm">&lt;/h1&gt;</span>
        </h2>
      </div>

      <div>
        <span className="text-primary text-sm">&lt;p&gt;</span>
        <p className="text-slate-200 max-w-[50ch]">
          Ajudo empresas a crescer criando experiências web incríveis. Se você
          procura um desenvolvedor que faz acontecer, podemos começar agora.
        </p>
        <span className="text-primary text-sm">&lt;/p&gt;</span>
      </div>

      <button
        className="flex flex-row flex-nowrap items-center gap-2 cursor-pointer"
        onClick={() => scroll("contact")}
      >
        <h3 className="text-primary text-2xl">Vamos Conversar?</h3>
        <div className="bg-bg2 p-2 rounded-full">
          <MdEmail className="text-primary text-2xl" />
        </div>
      </button>
    </article>
  );
}
