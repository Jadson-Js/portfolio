"use client";
import Link from "next/link";

import { FaLinkedin, FaPhoneSquareAlt } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaSquareGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import React from "react";
import { getCurrentSection } from "@/utils/getCurrentSection";

// className="container mx-auto flex flex-col justify-between items-center border-b-1 border-bg2 py-16"

export function Navbar() {
  React.useEffect(() => {
    getCurrentSection("hero");
  }, []);

  return (
    <header id="hero" className="px-8">
      <nav className="container mx-auto py-8 flex flex-col justify-center items-center gap-4 border-b-1 border-bg2 md:flex-row md:justify-between">
        <h1 className="text-2xl">Jadson Abreu</h1>

        <ul className="flex flex-row flex-wrap  items-center gap-4 md:gap-8">
          <li>
            <Link
              href={"https://www.linkedin.com/in/jadson-abreu/"}
              target="_blank"
              className="flex flex-row items-center gap-1"
            >
              <FaLinkedin className="text-primary text-lg" />
              <p className="text-slate-200">LinkedIn</p>
            </Link>
          </li>
          <li>
            <Link
              href={"/CV.pdf"}
              className="flex flex-row items-center gap-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoDocumentTextSharp className="text-primary text-lg" />
              <p className="text-slate-200">Curriculum</p>
            </Link>
          </li>
          <li>
            <Link
              href={"https://github.com/Jadson-Js/"}
              target="_blank"
              className="flex flex-row items-center gap-1"
            >
              <FaSquareGithub className="text-primary text-lg" />
              <p className="text-slate-200">Github</p>
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
              <FaPhoneSquareAlt className="text-primary text-lg" />
              <p className="text-slate-200 overflow-hidden whitespace-nowrap text-ellipsis">
                Whatsapp
              </p>
            </Link>
          </li>
          <li>
            <Link href={"#"} className="flex flex-row items-center gap-1">
              <MdEmail className="text-primary text-lg" />
              <p className="text-slate-200 overflow-hidden whitespace-nowrap text-ellipsis flex-1">
                email
              </p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
