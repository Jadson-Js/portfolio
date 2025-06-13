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
    <aside className="fixed top-1/4 left-20 p-2 bg-bg3 rounded-full border border-white">
      <ul className="flex flex-col gap-6">
        <li className="bg-white rounded-full p-2">
          <Link href={"#"}>
            <RxDashboard className="text-3xl text-slate-800" />
          </Link>
        </li>

        <li className="bg-bg3 rounded-full p-2">
          <Link href={"#"}>
            <FiUser className="text-3xl" />
          </Link>
        </li>
        <li className="bg-bg3 rounded-full p-2">
          <Link href={"#"}>
            <MdOutlineDesktopWindows className="text-3xl" />
          </Link>
        </li>
        <li className="bg-bg3 rounded-full p-2">
          <Link href={"#"}>
            <MdWorkOutline className="text-3xl" />
          </Link>
        </li>
        <li className="bg-bg3 rounded-full p-2">
          <Link href={"#"}>
            <MdOutlineEmail className="text-3xl" />
          </Link>
        </li>
      </ul>
    </aside>
  );
}
