import { About } from "@/components/about/About";
import { Experiences } from "@/components/experiences/Experiences";
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

        <Experiences />

        <Sidebar />
        <Whatsapp />
      </main>
    </>
  );
}
