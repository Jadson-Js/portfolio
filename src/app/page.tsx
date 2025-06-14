import { About } from "@/components/about/About";
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

        <About />
      </main>
      <Sidebar />
      <Whatsapp />
    </>
  );
}
