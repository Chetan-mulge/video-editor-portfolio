"use client";
import { motion } from "framer-motion";

const services = [
  {
    title: "Retention Engineering",
    desc: "Psychology-based editing for Reels/TikToks. Fast pacing, sound triggers, and dynamic captions designed for the 3-second hook.",
    price: "$200",
    tools: "Pr / Ae / AI"
  },
  {
    title: "Cinematic Narrative",
    desc: "High-end storytelling for brands and creators. Focus on pacing, emotion, and rhythm. Best for travel, documentaries, and ads.",
    price: "$500",
    tools: "DaVinci / Pr"
  },
  {
    title: "VFX & Motion Design",
    desc: "Complex 2D/3D tracking, object removal, and high-energy motion graphics that regular editors can't touch.",
    price: "$800",
    tools: "Ae / Blender"
  },
  {
    title: "The Signature Grade",
    desc: "Custom color science. Converting flat LOG footage into cinematic masterpieces with custom LUT engineering.",
    price: "$300",
    tools: "DaVinci Resolve"
  }
];

export default function Services() {
  return (
    <section className="py-32 px-6 md:px-20 bg-black relative">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-20">
          <h2 className="font-bebas text-6xl md:text-9xl outline-text">Capabilities</h2>
          <p className="font-outfit text-zinc-500 tracking-[0.3em] uppercase text-[10px] mt-4">Premium Service Suite // 2026</p>
        </div>

        <div className="grid grid-cols-1 gap-px bg-zinc-900 border border-zinc-900 overflow-hidden rounded-3xl">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              whileHover={{ backgroundColor: "#080808" }}
              className="bg-black p-8 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-center group transition-all duration-500"
            >
              <div className="max-w-xl">
                <span className="text-zinc-700 font-bebas text-xl mb-4 block">0{i + 1}</span>
                <h3 className="font-bebas text-4xl md:text-5xl text-white mb-4 group-hover:tracking-wider transition-all duration-500">
                  {service.title}
                </h3>
                <p className="text-zinc-500 font-outfit leading-relaxed text-sm md:text-base group-hover:text-zinc-300 transition-colors">
                  {service.desc}
                </p>
              </div>

              <div className="mt-8 md:mt-0 flex items-center gap-12 w-full md:w-auto border-t border-zinc-900 md:border-none pt-8 md:pt-0">
                <div className="text-left md:text-right">
                  <p className="text-zinc-600 text-[10px] uppercase tracking-widest mb-1 font-outfit">Stack</p>
                  <p className="font-bebas text-xl text-white">{service.tools}</p>
                </div>
                <div className="text-left md:text-right min-w-[140px]">
                  <p className="text-zinc-600 text-[10px] uppercase tracking-widest mb-1 font-outfit">Starting At</p>
                  <p className="font-bebas text-4xl text-white">{service.price}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* SOFTWARE MASTERY MARQUEE */}
        <div className="mt-20 flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
          {["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Blender", "Photoshop"].map((sw) => (
            <span key={sw} className="font-outfit text-[10px] uppercase tracking-[0.5em] text-white">
              {sw}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}