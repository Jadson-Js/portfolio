import React from "react";
import { FiSend } from "react-icons/fi";
import { Thanks } from "./Thanks";

export function Form() {
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = React.useState<boolean>(false);
  const [message, setMessage] = React.useState<string>("");
  const textAreaRef = React.useRef<HTMLTextAreaElement>(null);

  const adjustHeight = () => {
    const textarea = textAreaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target as HTMLFormElement);

    try {
      const response = await fetch("https://formspree.io/f/xnnvbqdj", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSubmitted(true);

        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error("Erro ao enviar formulário");
      }
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao enviar mensagem. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  React.useEffect(() => {
    adjustHeight();
  }, [message]);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-8 w-full justify-center"
      >
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_subject" value="Nova mensagem do site" />

        <div className="flex flex-col gap-8 sm:flex-row">
          <div className="flex flex-col flex-1 gap-4">
            <label htmlFor="name" className="capitalize text-primary text-lg">
              Seu nome
            </label>
            <input
              type="text"
              name="name"
              placeholder="Digite seu nome aqui"
              className="focus:outline-none border-b border-primary pb-2"
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="flex flex-col flex-1 gap-4">
            <label htmlFor="email" className="capitalize text-primary text-lg">
              Seu email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Digite seu email aqui"
              className="focus:outline-none border-b border-primary pb-2"
              required
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div className="flex flex-col flex-1 gap-4 mb-8">
          <label htmlFor="message" className="capitalize text-primary text-lg">
            Sua mensagem
          </label>

          <textarea
            ref={textAreaRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            name="message"
            placeholder="Digite sua mensagem aqui"
            className="focus:outline-none border-b border-primary pb-2  overflow-hidden"
            required
            disabled={isSubmitting}
            rows={1}
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-primary text-gray-800 flex flex-row gap-4 px-8 py-4 rounded-4xl cursor-pointer uppercase hover:bg-b1 transition-all w-fit disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Enviando..." : "Enviar"}
            <FiSend className="text-2xl" />
          </button>
        </div>
      </form>

      <Thanks isOpen={isSubmitted} onClose={() => setIsSubmitted(false)} />
    </>
  );
}
