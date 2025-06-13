import { MdEmail } from "react-icons/md";

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
          Estudante e desenvolvedor Full Stack, com foco em transformar
          conhecimento em experiência real.
        </p>
        <span className="text-primary text-sm">&lt;/p&gt;</span>
      </div>

      <div className="flex flex-row flex-nowrap items-center gap-2">
        <h3 className="text-primary text-2xl">Vamos Conversar?</h3>
        <div className="bg-bg2 p-1 rounded-full">
          <MdEmail className="text-primary text-lg" />
        </div>
      </div>
    </article>
  );
}
