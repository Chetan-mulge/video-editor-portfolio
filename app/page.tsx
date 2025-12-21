"use client";

import { useEffect } from "react";

// --- COMPONENTS ---
// Fixed Import: It is "./components" not "../components" if this file is in app/
import Abstract3D from "./components/abstract3D"; 

// --- SECTIONS ---
import Hero from "./sections/hero";
import Impact from "./sections/impact";
import ShowWork from "./sections/showwork";
import Skills from "./sections/skills";
import Services from "./sections/services";
import About from "./sections/about";
import Contact from "./sections/contact";

export default function Home() {
  
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    // 1. BACKGROUND: Deep Black (No Purple)
    <main className="min-h-screen bg-[#0A0A0A] text-white relative selection:bg-[#D4AF37] selection:text-black">
      
      {/* 2. THE GOLDEN NET (Fixed Background) */}
      {/* This was missing in your code! */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-50">
        <Abstract3D />
      </div>

      {/* 3. CONTENT (Scrolls over the net) */}
      <div className="relative z-10">
        <Hero />
        <Impact />
        <ShowWork />
        <Skills />
        <Services />
        <About />
        <Contact />
      </div>

    </main>
  );
}