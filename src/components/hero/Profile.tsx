import Image from "next/image";
import Link from "next/link";
import { AiOutlineEye } from "react-icons/ai";
import { GoDownload } from "react-icons/go";

export function Profile() {
  return (
    <div className="border-t-4 border-l-4 border-primary rounded-tl-[125px] w-fit max-w-full">
      <article className="border-2 rounded-tl-[120px] rounded-br-[125px] flex flex-col gap-8 py-8 pl-2 pr-8 sm:pl-4 sm:pr-12 w-full">
        <div className="flex flex-col items-center text-center flex-1">
          <Image
            className="mb-4"
            src="/profile.svg"
            alt="Profile Photo"
            width={100}
            height={100}
          />

          <h2 className="mb-2 text-2xl">Jadson</h2>
          <p className="text-slate-200">Full Stack Developer</p>
        </div>

        <div className="flex flex-col gap-4">
          <Link
            href={"/CV.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-slate-800  flex flex-row justify-between items-center gap-4 p-4 rounded-4xl flex-1 uppercase"
          >
            Ver Currículo <AiOutlineEye className="text-2xl" />
          </Link>

          <Link
            href={"/CV.pdf"}
            download
            className="border border-white text-white  flex flex-row justify-between items-center gap-4 p-4 rounded-4xl flex-1 uppercase"
          >
            Baixar Currículo <GoDownload className="text-2xl" />
          </Link>
        </div>
      </article>
    </div>
  );
}
