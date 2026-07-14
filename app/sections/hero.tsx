"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="h-screen flex flex-col justify-center items-center relative overflow-hidden">
      
      {/* 1. KINETIC BACKGROUND TEXT: Moves subtly with the liquid mesh */}
      <motion.div 
        animate={{ 
          x: [-10, 10, -10],
          y: [-5, 5, -5] 
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-[28vw] font-bebas text-white/[0.03] pointer-events-none select-none -z-10 uppercase tracking-tighter"
      >
        Retention
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="text-center z-10 px-4"
      >
        <span className="text-[10px] tracking-[1em] text-zinc-500 uppercase mb-8 block font-outfit">
          Visual Engineering // 2026
        </span>
        
        {/* 2. CHETAN: Using Mix-Blend-Mode to react to the Liquid Background colors */}
        <h1 className="text-[22vw] md:text-[16vw] leading-[0.7] font-bebas text-white mix-blend-difference selection:bg-purple-500">
          CHETAN
        </h1>
        
        {/* 3. MULGE: Fixed with the Glass-Outline effect from your CSS */}
        <h1 className="text-[22vw] md:text-[16vw] leading-[0.85] font-bebas outline-text transition-all duration-1000">
          MULGE
        </h1>

        {/* 4. PREMIUM GLASS-MORPHIC BUTTON */}
        <motion.button 
          onClick={() => setIsOpen(true)}
          whileHover={{ 
            scale: 1.05, 
            boxShadow: "0 0 50px rgba(255,255,255,0.15)",
            backgroundColor: "rgba(255,255,255,1)",
            color: "#000"
          }}
          whileTap={{ scale: 0.95 }}
          className="mt-16 bg-white/5 backdrop-blur-2xl border border-white/10 text-white px-14 py-5 rounded-full font-bold text-[10px] tracking-[0.5em] uppercase transition-all duration-500"
        >
          Watch Showreel
        </motion.button>
      </motion.div>

      {/* 5. CINEMATIC SHOWREEL PLAYER */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }} 
            animate={{ opacity: 1, backdropFilter: "blur(40px)" }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4 md:p-20"
          >
            <button 
              onClick={() => setIsOpen(false)} 
              className="absolute top-10 right-10 text-white font-bebas text-2xl tracking-[0.2em] hover:text-zinc-400 transition-colors"
            >
              CLOSE [X]
            </button>
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="w-full max-w-6xl aspect-video rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.8)] bg-zinc-950"
            >
              <video 
                src="/videos/reels/work1.mp4" 
                controls 
                autoPlay 
                className="w-full h-full object-cover" 
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}