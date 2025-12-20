import Hero from "./sections/hero";
import ShowWork from "./sections/showwork";
import Skills from "./sections/skills";
import Services from "./sections/services";
import Projects from "./sections/projects";
import About from "./sections/about";
import Contact from "./sections/contact";



export default function Home() {
  return (
    <main className="min-h-screen text-white bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]">
      {/* Purple glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.15),transparent_60%)]"></div>

      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <ShowWork/>
        <Skills/>
        <Services />
        <Projects />
        <About />
        <Contact />
      </div>
    </main>
  );
}
