"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

// 1. YOUR REAL STATS
const metrics = [
  { value: 7000, suffix: "+", label: "Followers Gained (Food Blog)" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
  { value: 2, suffix: " Years", label: "Content Experience" },
];

// 2. COUNTER ANIMATION HELPER
function Counter({ to, suffix }: { to: number; suffix: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest) + suffix);
  
  useEffect(() => {
    const controls = animate(count, to, { duration: 2, ease: "easeOut" });
    return controls.stop;
  }, [count, to]); 
  
  return <motion.span>{rounded}</motion.span>;
}

export default function Experience() {
  return (
    // ADDED id="experience" here so the Hero button lands exactly here
    <section id="experience" className="relative py-24 z-10">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">
            My <span className="text-[#D4AF37]">Experience</span>
          </h2>
          <div className="h-1 w-24 bg-[#D4AF37] mx-auto mb-6" />
          
          <p className="text-gray-300 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            From growing a <span className="text-white font-bold">Food Blog to 7K+ followers</span> to handling end-to-end production for <span className="text-white font-bold">Numerology Brands</span>.
          </p>
        </motion.div>

        {/* METRICS (Clean & Honest) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 border-y border-white/10 py-12">
          {metrics.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: i * 0.2 }}
              className="text-center group"
            >
              <h3 className="text-5xl md:text-6xl font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors duration-500">
                <Counter to={item.value} suffix={item.suffix} />
              </h3>
              <p className="text-gray-400 uppercase tracking-[0.2em] text-sm font-medium">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ROLES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
             {/* Role 1 */}
            <div className="p-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur-lg hover:border-[#D4AF37]/50 transition-all">
                <h3 className="text-2xl font-bold text-white mb-2">Food Blogging</h3>
                <p className="text-[#D4AF37] text-sm uppercase tracking-wider mb-4">Past Project</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                   Built a page from scratch to 7,000+ followers using high-retention editing and consistent posting strategies.
                </p>
            </div>

             {/* Role 2 */}
            <div className="p-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur-lg hover:border-[#D4AF37]/50 transition-all">
                <h3 className="text-2xl font-bold text-white mb-2">Numerology Brand</h3>
                <p className="text-[#D4AF37] text-sm uppercase tracking-wider mb-4">Current Role</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                   Managing full-stack production: Planning shoots, camera handling, and editing reels that drive client leads.
                </p>
            </div>
        </div>

      </div>
    </section>
  );
}