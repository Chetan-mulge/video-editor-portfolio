"use client";
import FadeIn from "../components/FadeIn";

const services = [
  {
    title: "Instagram Reels",
    desc: "High-retention editing designed to stop the scroll. I use fast pacing and dynamic captions to keep viewers watching till the end.",
    icon: "⚡"
  },
  {
    title: "Cinematic Editing",
    desc: "Storytelling focused. I craft travel films and brand documentaries that prioritize emotion, sound design, and narrative flow.",
    icon: "🎬"
  },
  {
    title: "Color Grading",
    desc: "Transforming raw LOG footage into vibrant, moody, or professional looks that align with your brand's unique aesthetic.",
    icon: "🎨"
  },
  {
    title: "Sound Design",
    desc: "The invisible layer. I use immersive SFX, audio transitions, and seamless music syncing to drive the video's rhythm.",
    icon: "🔊"
  }
];

export default function Services() {
  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
              What I <span className="text-[#D4AF37]">Do</span>
            </h2>
            <div className="h-1 w-24 bg-[#D4AF37] mx-auto" />
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              {/* Added: hover:-translate-y-2 and Gold Shadow */}
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-[#D4AF37]/50 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(212,175,55,0.15)] group">
                
                <div className="text-4xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors">
                  {service.desc}
                </p>

              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}