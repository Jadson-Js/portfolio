import { FiSend } from "react-icons/fi";

export function Form() {
  return (
    <form className="flex flex-col gap-8 w-full justify-center">
      <div className="flex flex-col gap-8 sm:flex-row">
        <div className="flex flex-col flex-1 gap-4">
          <label htmlFor="name" className="capitalize text-primary text-lg">
            Seu nome
          </label>
          <input
            type="text"
            placeholder="Digite seu nome aqui"
            className="focus:outline-none border-b border-primary pb-2"
          />
        </div>

        <div className="flex flex-col flex-1 gap-4">
          <label htmlFor="name" className="capitalize text-primary text-lg">
            Seu email
          </label>
          <input
            type="text"
            placeholder="Digite seu email aqui"
            className="focus:outline-none border-b border-primary pb-2"
          />
        </div>
      </div>

      <div className="flex flex-col flex-1 gap-4 mb-8">
        <label htmlFor="name" className="capitalize text-primary text-lg">
          Sua mensagem
        </label>
        <input
          type="text"
          placeholder="Digite seu nome aqui"
          className="focus:outline-none border-b border-primary pb-2"
        />
      </div>

      <div className="flex justify-center">
        <button className="bg-primary text-gray-800  flex flex-row  gap-4 px-8 py-4 rounded-4xl cursor-pointer uppercase hover:bg-b1 transition-all w-fit">
          Enviar <FiSend className="text-2xl" />
        </button>
      </div>
    </form>
  );
}
