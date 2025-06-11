import { Hero } from "@/components/hero/Hero";
import { Navbar } from "@/components/hero/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
      </main>
    </>
  );
}
