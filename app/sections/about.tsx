"use client";
import FadeIn from "../components/FadeIn";

export default function About() {
  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-10">
            Behind the <span className="text-[#D4AF37]">Edits</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="p-10 md:p-14 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg">
            
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6 font-light">
              I’m <span className="text-white font-bold">Chetan Mulge</span>, a video editor who obsesses over the details that others miss. 
              My philosophy is simple: <span className="text-[#D4AF37]">Attention is currency</span>. I don't just cut footage; I engineer retention using psychology-based pacing and immersive sound design.
            </p>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 font-light">
              My background is unique—I combine the technical discipline of a <span className="text-white">Master of Computer Applications (MCA)</span> scholar with the creative flow of a visual artist. This allows me to approach every project with both structure and soul, ensuring your videos are not only beautiful but strategically built to convert.
            </p>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 font-light">
               Whether it's a 15-second reel or a cinematic travel film, I treat every frame as an opportunity to tell your story.
            </p>
            
            {/* Badges */}
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-6 py-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#D4AF37] text-sm uppercase tracking-widest">
                MCA Scholar
              </div>
              <div className="px-6 py-2 rounded-full border border-white/20 bg-white/5 text-gray-300 text-sm uppercase tracking-widest">
                Visual Storyteller
              </div>
            </div>

          </div>
        </FadeIn>

      </div>
    </section>
  );
}