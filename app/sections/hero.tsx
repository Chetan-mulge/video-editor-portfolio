"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const tags = ["Instagram Reels", "YouTube Edits", "Motion Graphics"];

export default function Hero() {
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      document.documentElement.style.setProperty("--parallax", `${y * 0.15}px`);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center px-6 overflow-hidden">
      
      {/* 🎥 Background Video - CRYSTAL CLEAR (No Black Overlay) */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover" // Removed opacity reduction, full brightness
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* I DELETED THE BLACK OVERLAY DIV HERE */}
      </div>

      {/* 🌟 Content */}
      <motion.div
        className="relative z-10 max-w-4xl text-center mt-10"
        style={{ transform: "translateY(var(--parallax))" }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        
        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white tracking-tight mb-4 drop-shadow-lg">
          CHETAN MULGE
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-2xl text-gray-100 font-light tracking-wide mb-6 drop-shadow-md">
          Cinematic Reels & Scroll-Stopping Edits
          <span className="block mt-1 text-gray-200">for Creators & Brands</span>
        </p>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-5 py-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-gray-100 text-sm font-medium tracking-wide backdrop-blur-md shadow-lg"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Primary Button - NOW SCROLLS TO EXPERIENCE */}
        <Link
            href="#experience" // Changed from #showwork to #experience
            onClick={(e) => {
               e.preventDefault();
               document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#D4AF37] text-black font-bold shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-transform hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.6)]"
          >
            <span>View My Works</span>
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </Link>

      </motion.div>

      {/* Bottom Contact Button */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <Link 
          href="#contact"
          onClick={(e) => {
             e.preventDefault();
             document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="flex flex-col items-center gap-2 text-gray-200 hover:text-[#D4AF37] transition-colors cursor-pointer group drop-shadow-md"
        >
          <span className="text-xs uppercase tracking-[0.2em]">Contact</span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center p-1 opacity-80 group-hover:opacity-100 transition-all">
            <motion.div 
              animate={{ y: [0, 12, 0] }} 
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-1 h-2 bg-current rounded-full"
            />
          </div>
        </Link>
      </motion.div>

    </section>
  );
}