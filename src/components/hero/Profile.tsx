import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaPhoneSquareAlt } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { GoDownload } from "react-icons/go";
import { MdEmail } from "react-icons/md";

export function Profile() {
  return (
    <div className="border-t-4 border-l-4 border-primary rounded-tl-[125px]">
      <div className="border-2 rounded-tl-[120px] rounded-br-[125px]  pl-4 pr-16 py-8 flex flex-col gap-8">
        <div className="flex flex-col items-center text-center">
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

        <ul className="flex flex-col gap-4">
          <li>
            <Link href={"#"} className="flex flex-row items-center gap-1">
              <MdEmail className="text-primary text-2xl flex-shrink-0" />
              <p className="text-slate-200 overflow-hidden whitespace-nowrap text-ellipsis">
                jadson20051965@gmail.com
              </p>
            </Link>
          </li>
          <li>
            <Link href={"#"} className="flex flex-row items-center gap-1">
              <FaPhoneSquareAlt className="text-primary text-2xl flex-shrink-0" />
              <p className="text-slate-200 overflow-hidden whitespace-nowrap text-ellipsis">
                (98)98350-7939
              </p>
            </Link>
          </li>
          <li>
            <Link href={"#"} className="flex flex-row items-center gap-1">
              <FaLinkedin className="text-primary text-2xl flex-shrink-0" />
              <p className="text-slate-200 overflow-hidden whitespace-nowrap text-ellipsis">
                Linkedin
              </p>
            </Link>
          </li>
          <li>
            <Link href={"#"} className="flex flex-row items-center gap-1">
              <FaSquareGithub className="text-primary text-2xl flex-shrink-0" />
              <p className="text-slate-200 overflow-hidden whitespace-nowrap text-ellipsis">
                Github
              </p>
            </Link>
          </li>
        </ul>

        <button className="bg-white text-slate-800 text-xl flex flex-row justify-center items-center gap-4 p-4 rounded-4xl">
          Download CV <GoDownload className="text-3xl" />
        </button>
      </div>
    </div>
  );
}
