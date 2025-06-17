import { About } from "@/components/about/About";
import { Hero } from "@/components/hero/Hero";
import { Navbar } from "@/components/hero/Navbar";
import { Projects } from "@/components/projects/Projects";
import { Sidebar } from "@/components/Sidebar";
import { Whatsapp } from "@/components/Whatsapp";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />

        <About />

        <Projects />

        <Sidebar />
        <Whatsapp />
      </main>
    </>
  );
}
