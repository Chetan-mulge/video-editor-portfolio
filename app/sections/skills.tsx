"use client";
import FadeIn from "../components/FadeIn";

// 1. FIXED INTERFACE (Added '?' to make subtitle optional)
interface SkillProps {
  name: string;
  file: string;
  subtitle?: string; 
}

// 2. YOUR TOOLS
const tools: SkillProps[] = [
  { name: "Premiere Pro", file: "premiere.png" }, // No subtitle needed now!
  { name: "After Effects", file: "aftereffects.png" },
  { name: "DaVinci Resolve", file: "davinci.png" },
  { name: "CapCut", file: "capcut.png" },
];

export default function Skills() {
  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-4">
              My <span className="text-[#D4AF37]">Arsenal</span>
            </h2>
            <div className="h-1 w-24 bg-[#D4AF37] mx-auto" />
          </div>
        </FadeIn>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {tools.map((tool, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col items-center justify-center text-center hover:border-[#D4AF37]/50 hover:-translate-y-2 transition-all duration-300 group">
                
                {/* Icon Placeholder (If image fails, it shows initials) */}
                <div className="w-16 h-16 mb-4 relative flex items-center justify-center bg-black/30 rounded-full border border-white/5 group-hover:scale-110 transition-transform">
                    {/* We try to render the image, but fallback to text if missing */}
                    <img 
                      src={`/${tool.file}`} 
                      alt={tool.name}
                      className="w-10 h-10 object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'; // Hide broken image
                        e.currentTarget.parentElement!.innerText = tool.name[0]; // Show letter
                      }}
                    />
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                  {tool.name}
                </h3>
                
                {/* Only renders if subtitle exists */}
                {tool.subtitle && (
                  <p className="text-xs text-gray-500 uppercase tracking-widest mt-2">
                    {tool.subtitle}
                  </p>
                )}

              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}