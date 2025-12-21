"use client";
import FadeIn from "../components/FadeIn";
import Image from "next/image";

type SkillProps = {
  name: string;
  subtitle: string;
  file: string; // Ensure this matches your filename in public/logos (e.g., "premiere.png")
};

const tools: SkillProps[] = [
  { name: "Premiere Pro",  file: "premiere.png" },
  { name: "After Effects",  file: "aftereffects.png" },
  { name: "DaVinci Resolve",  file: "davinci.png" },
  { name: "CapCut",  file: "capcut.png" },
  { name: "Photoshop",  file: "photoshop.png" },
];

export default function Skills() {
  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 text-white">
            My <span className="text-[#D4AF37]">Tools</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {tools.map((tool, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              {/* Premium Glass Card */}
              <div className="group relative p-6 h-full rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col items-center text-center transition-all duration-300 hover:bg-white/10 hover:border-[#D4AF37]/50 hover:scale-105 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]">
                
                {/* Logo */}
                <div className="w-16 h-16 mb-4 relative flex items-center justify-center group-h  over:grayscale-0 transition-all duration-300">
                   {/* This looks for files in /public/logos/ */}
                   <img 
                     src={`/logos/${tool.file}`} 
                     alt={`${tool.name} logo`}
                     className="w-full h-full object-contain drop-shadow-lg"
                     onError={(e) => { e.currentTarget.style.display = 'none'; }}
                   />
                </div>

                {/* Name */}
                <h3 className="text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                  {tool.name}
                </h3>
                
                {/* Subtitle */}
                <p className="text-xs text-gray-400 mt-1">
                  {tool.subtitle}
                </p>

              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}