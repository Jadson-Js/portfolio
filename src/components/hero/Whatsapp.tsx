import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io";

export function Whatsapp() {
  return (
    <Link
      href={
        "https://wa.me/5598983507939?text=Ol%C3%A1%2C+vi+seu+portf%C3%B3lio+e+gostaria+de+conversar+com+voc%C3%AA."
      }
      target="_blank"
      className="fixed bottom-20 right-8"
    >
      <IoLogoWhatsapp className="text-primary text-5xl" />
    </Link>
  );
}
