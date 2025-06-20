"use client";

import { FiUser } from "react-icons/fi";
import {
  MdOutlineDesktopWindows,
  MdOutlineEmail,
  MdWorkOutline,
} from "react-icons/md";
import { RxDashboard } from "react-icons/rx";

import { scroll } from "../utils/scroll";
import React from "react";

export function Sidebar() {
  const [hash, setHash] = React.useState<string>("");

  React.useEffect(() => {
    const handleHashChange = () => {
      const currentHash = window.location.hash.slice(1); // Remove o #
      setHash(currentHash);
    };

    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <aside className="hidden fixed top-1/4 left-4 p-2 bg-bg3 rounded-full border border-white xl:block 2xl:left-10 3xl:left-20">
      <ul className="flex flex-col gap-6 transition-colors duration-300">
        <li
          className={`rounded-full p-2 ${
            hash === "hero" ? "bg-white" : "bg-bg3"
          }`}
        >
          <div onClick={() => scroll("hero")} className={"cursor-pointer"}>
            <RxDashboard
              className={`text-xl ${hash === "hero" && "text-slate-800"}`}
            />
          </div>
        </li>
        <li
          className={`rounded-full p-2 ${
            hash === "about" ? "bg-white" : "bg-bg3"
          }`}
        >
          <div onClick={() => scroll("about")} className="cursor-pointer">
            <FiUser
              className={`text-xl ${hash === "about" && "text-slate-800"}`}
            />
          </div>
        </li>
        <li
          className={`rounded-full p-2 ${
            hash === "projects" ? "bg-white" : "bg-bg3"
          }`}
        >
          <div onClick={() => scroll("projects")} className="cursor-pointer">
            <MdOutlineDesktopWindows
              className={`text-xl ${hash === "projects" && "text-slate-800"}`}
            />
          </div>
        </li>
        <li
          className={`rounded-full p-2 ${
            hash === "experiences" ? "bg-white" : "bg-bg3"
          }`}
        >
          <div onClick={() => scroll("experiences")} className="cursor-pointer">
            <MdWorkOutline
              className={`text-xl ${
                hash === "experiences" && "text-slate-800"
              }`}
            />
          </div>
        </li>
        <li
          className={`rounded-full p-2 ${
            hash === "contact" ? "bg-white" : "bg-bg3"
          }`}
        >
          <div onClick={() => scroll("contact")} className="cursor-pointer">
            <MdOutlineEmail
              className={`text-xl ${hash === "contact" && "text-slate-800"}`}
            />
          </div>
        </li>
      </ul>
    </aside>
  );
}
