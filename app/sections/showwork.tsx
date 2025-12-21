"use client";
import Link from "next/link";
import FadeIn from "../components/FadeIn";

// ⚠️ CONFIRM THESE PATHS ARE 100% CORRECT
const featuredVideos = [
  {
    title: "Travel Edit V1",
    subtitle: "Cinematic Vertical",
    src: "/videos/travel/travel-1.mp4", 
  },
  {
    title: "Viral Reel",
    subtitle: "High Retention",
    src: "/videos/reels/work1.mp4",
  },
  {
    title: "Brand Promo",
    subtitle: "Commercial Style",
    src: "/videos/reels/work3.mp4",
  },
];

export default function ShowWork() {
  return (
    <section id="showwork" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-4">
              Selected <span className="text-[#D4AF37]">Works</span>
            </h2>
            <div className="h-1 w-24 bg-[#D4AF37] mx-auto mb-6" />
            <p className="text-gray-400 text-lg">
              Handpicked edits. <Link href="/works" className="text-white underline decoration-[#D4AF37] underline-offset-4 hover:text-[#D4AF37] transition">View all videos →</Link>
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
          {featuredVideos.map((item, index) => (
            <FadeIn key={index} delay={index * 0.2}>
              <div className="group relative w-full max-w-[320px] mx-auto aspect-[9/16] overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl hover:border-[#D4AF37]/50 transition-colors duration-500">
                
                {/* PURE VIDEO TAG (No Poster) */}
                <video
                  src={item.src}
                  muted 
                  loop 
                  autoPlay 
                  playsInline 
                  preload="auto" // Forces browser to load video data immediately
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                
                <div className="absolute bottom-0 left-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                   <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                   <p className="text-[#D4AF37] text-xs uppercase tracking-widest">{item.subtitle}</p>
                </div>

              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}