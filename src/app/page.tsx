import { Hero } from "@/components/hero/Hero";
import { Navbar } from "@/components/hero/Navbar";
import { Sidebar } from "@/components/Sidebar";
import { Whatsapp } from "@/components/Whatsapp";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
      </main>
      <Sidebar />
      <Whatsapp />
    </>
  );
}
