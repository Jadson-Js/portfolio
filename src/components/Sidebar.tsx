import Link from "next/link";
import { FiUser } from "react-icons/fi";
import {
  MdOutlineDesktopWindows,
  MdOutlineEmail,
  MdWorkOutline,
} from "react-icons/md";
import { RxDashboard } from "react-icons/rx";

export function Sidebar() {
  return (
    <aside className="hidden fixed top-1/4 left-4 p-2 bg-bg3 rounded-full border border-white xl:block 2xl:left-10 3xl:left-20">
      <ul className="flex flex-col gap-6">
        <li className="bg-white rounded-full p-2">
          <Link href={"#"}>
            <RxDashboard className="text-xl text-slate-800" />
          </Link>
        </li>

        <li className="bg-bg3 rounded-full p-2">
          <Link href={"#"}>
            <FiUser className="text-xl" />
          </Link>
        </li>
        <li className="bg-bg3 rounded-full p-2">
          <Link href={"#"}>
            <MdOutlineDesktopWindows className="text-xl" />
          </Link>
        </li>
        <li className="bg-bg3 rounded-full p-2">
          <Link href={"#"}>
            <MdWorkOutline className="text-xl" />
          </Link>
        </li>
        <li className="bg-bg3 rounded-full p-2">
          <Link href={"#"}>
            <MdOutlineEmail className="text-xl" />
          </Link>
        </li>
      </ul>
    </aside>
  );
}
