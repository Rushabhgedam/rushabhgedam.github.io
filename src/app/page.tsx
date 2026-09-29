import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Architecture from "@/sections/Architecture";
import Experience from "@/sections/Experience";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#050505]">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Architecture />
      <Experience />
      <Contact />
    </main>
  );
}
