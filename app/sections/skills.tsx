"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";
import FadeIn from "../components/FadeIn";

// 1. Data Structure
interface SkillProps {
  name: string;
  file: string;
  subtitle?: string; 
}

const tools: SkillProps[] = [
  { name: "Premiere Pro", file: "logos/premiere.png"},
  { name: "After Effects", file: "logos/aftereffects.png"},
  { name: "DaVinci Resolve", file: "logos/davinci.png"},
  { name: "CapCut", file: "logos/capcut.png"},
  { name: "PhotoShop", file: "logos/photoshop.png"},
];

// 2. SKILL ITEM COMPONENT
function SkillItem({ tool }: { tool: SkillProps }) {
  const ref = useRef(null);
  // Triggers when item is 20% from bottom of screen
  const isInView = useInView(ref, { margin: "-20% 0px -20% 0px", amount: "some" });

  return (
    <div 
      ref={ref}
      // BORDER LOGIC:
      // Mobile: Lights up when In View.
      // PC (md): Lights up ONLY on Hover (overrides InView).
      className={`relative p-6 rounded-2xl bg-white/5 border backdrop-blur-md flex flex-col items-center justify-center text-center transition-all duration-500 group hover:-translate-y-2
        ${isInView ? "border-[#D4AF37]/60 md:border-white/10" : "border-white/10"} 
        md:hover:border-[#D4AF37]/60`}
    >
      
      {/* ✨ SMART GLOW LOGIC ✨ */}
      {/* 1. 'opacity-50': Default if InView (Makes Mobile Glow).
         2. 'md:opacity-0': Force OFF on PC even if InView (Keeps PC dark).
         3. 'md:group-hover:opacity-50': Force ON when hovering on PC.
      */}
      <div 
        className={`absolute inset-0 w-full h-full bg-[#D4AF37] blur-[50px] rounded-full transition-opacity duration-500 pointer-events-none z-0
        ${isInView ? "opacity-50 md:opacity-0" : "opacity-0"} 
        md:group-hover:opacity-50`}
      />

      {/* ICON CONTAINER */}
      <div className="relative z-10 w-20 h-20 mb-4 flex items-center justify-center bg-black/40 rounded-full border border-white/10 transition-transform duration-500 group-hover:scale-110">
          <img 
            src={`/${tool.file}`} 
            alt={tool.name}
            className="w-12 h-12 object-contain"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const span = e.currentTarget.parentNode?.querySelector('.fallback-text');
              if (span) (span as HTMLElement).style.display = 'block';
            }}
          />
          <span className="fallback-text hidden text-2xl font-bold text-gray-500">
              {tool.name[0]}
          </span>
      </div>

      {/* TITLE LOGIC: Same as Border (Mobile: InView, PC: Hover) */}
      <h3 className={`relative z-10 text-lg font-bold transition-colors duration-300 
         ${isInView ? "text-[#D4AF37] md:text-white" : "text-white"} 
         md:group-hover:text-[#D4AF37]`}>
        {tool.name}
      </h3>

    </div>
  );
}

// 3. MAIN SECTION
export default function Skills() {
  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-4">
              My <span className="text-[#D4AF37]">Arsenal</span>
            </h2>
            <div className="h-1 w-24 bg-[#D4AF37] mx-auto" />
          </div>
        </FadeIn>

        {/* LAYOUT FIX: 
            md:grid-cols-5 -> Forces 5 items in one row on PC
        */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {tools.map((tool, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <SkillItem tool={tool} />
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}