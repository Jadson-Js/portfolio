import Link from "next/link";
import { FaLinkedin, FaPhoneSquareAlt } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { IoDocumentTextSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

export function Footer() {
  return (
    <footer className="bg-bg3  px-8 py-4 xl:px-20 md:py-4 border-t-3 border-bg1">
      <div className="max-w-[1200px] container mx-auto flex flex-col justify-center gap-4 items-center md:flex-row md:justify-between">
        <span className="text-xs text-center">
          © 2025 Jadson – Todos os direitos reservados.
        </span>

        <span className="text-xs text-center">
          Design inspirado em{" "}
          <Link
            href="https://dribbble.com/johannleon2025"
            className="hover:text-primary"
            target="_blank"
          >
            JohannLeon
          </Link>
          , com customizações próprias.
        </span>

        <nav>
          <ul className="flex flex-row flex-wrap justify-center  items-center gap-4 ">
            <li>
              <Link
                href={"https://www.linkedin.com/in/jadson-abreu/"}
                target="_blank"
                className="flex flex-row items-center gap-1"
              >
                <FaLinkedin className="text-primary text-3xl" />
              </Link>
            </li>
            <li>
              <Link
                href={"/CV.pdf"}
                className="flex flex-row items-center gap-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoDocumentTextSharp className="text-primary text-3xl" />
              </Link>
            </li>
            <li>
              <Link
                href={"https://github.com/Jadson-Js/"}
                target="_blank"
                className="flex flex-row items-center gap-1"
              >
                <FaSquareGithub className="text-primary text-3xl" />
              </Link>
            </li>
            <li>
              <Link
                href={
                  "https://wa.me/5598983507939?text=Ol%C3%A1%2C+vi+seu+portf%C3%B3lio+e+gostaria+de+conversar+com+voc%C3%AA."
                }
                target="_blank"
                className="flex flex-row items-center gap-1"
              >
                <FaPhoneSquareAlt className="text-primary text-3xl" />
              </Link>
            </li>
            <li>
              <Link href={"#"} className="flex flex-row items-center gap-1">
                <MdEmail className="text-primary text-3xl" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
