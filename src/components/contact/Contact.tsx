import { TitleSection } from "../TitleSection";
import { Form } from "./Form";

export function Contact() {
  return (
    <section className="bg-bg3  px-8 py-8 xl:px-20 md:py-16 min-h-screen flex items-center bg-cover relative">
      <div className="max-w-[1200px] container mx-auto flex flex-col justify-center items-center">
        <div className="flex flex-col gap-4 mb-8">
          <TitleSection title="Contato" />
          <p className="text-slate-200">
            Precisa de um desenvolvedor dedicado? Estou a um clique de
            distância.
          </p>
        </div>

        <h3 className="text-primary text-2xl text-center px-8 py-4 border-2 border-primary w-fit rounded-tl-4xl rounded-br-4xl capitalize mb-16">
          Envie uma mensagem
        </h3>

        <Form />
      </div>
    </section>
  );
}
