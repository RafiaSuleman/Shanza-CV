import { ArrowDown } from "lucide-react";
import About from "./component/about";
import Hero from "./component/hero";
import Skills from "./component/skill";
import Services from "./component/services";
import Contact from "./component/contact";
import Navbar from "./component/navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F7F4] text-[#171717]">
         <Navbar />

      <section>
        <Hero />
      </section>

      <div className="flex justify-center pb-8">
        <a
          href="#about"
          className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-gray-400 transition hover:text-[#E56B4B]"
        >
          Scroll to explore <ArrowDown size={15} />
        </a>
      </div>

      <section id="about" className="bg-white px-6 py-24 lg:px-12">
        <About />
      </section>

      <section id="skills" className="bg-white px-6 py-24 lg:px-12">
        <Skills />
      </section>

      <section id="experience" className="bg-white px-6 py-24 lg:px-12">
        <Services />
      </section>

      <section id="experience" className="bg-white px-6 py-24 lg:px-12">
        <Contact />
      </section>
    </main>
  );
}
