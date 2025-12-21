"use client";
import FadeIn from "../components/FadeIn";

export default function Contact() {
  return (
    <section id="contact" className="py-40 px-6 relative z-20 text-center">
      <div className="max-w-5xl mx-auto">
        
        <FadeIn>
          <h2 className="text-6xl md:text-9xl font-serif text-white mb-8 tracking-tighter drop-shadow-2xl">
            Let's <span className="text-[#D4AF37]">Create</span>
          </h2>
          <p className="text-gray-300 text-xl md:text-2xl mb-16 max-w-2xl mx-auto font-light">
            Ready to scale your content? I'm currently accepting new projects.
          </p>
        </FadeIn>

        {/* EMAIL LINK - SIZE FIXED FOR MOBILE */}
        <FadeIn delay={0.2}>
          <div className="relative inline-block group max-w-full break-words">
            <a 
              href="mailto:mulge10chetan@gmail.com" 
              // UPDATED: text-2xl (Mobile) -> sm:text-4xl (Tablet) -> md:text-6xl (PC)
              className="relative z-10 inline-block text-2xl sm:text-4xl md:text-6xl font-bold text-white transition-all border-b-2 border-white/20 group-hover:border-[#D4AF37] group-hover:text-[#D4AF37] pb-4 mb-20"
            >
              mulge10chetan@gmail.com
            </a>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-[#D4AF37] blur-[100px] opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
          </div>
        </FadeIn>

        {/* Social Links */}
        <FadeIn delay={0.3}>
          <div className="inline-flex flex-wrap justify-center gap-6 md:gap-12 bg-black/40 backdrop-blur-md px-10 py-6 rounded-full border border-white/10">
            {[
              { name: "Instagram", url: "https://instagram.com" },
              { name: "LinkedIn", url: "https://linkedin.com" },
           //   { name: "YouTube", url: "https://youtube.com" }
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-bold uppercase tracking-[0.15em] text-sm md:text-lg transition-all hover:text-[#D4AF37] hover:scale-110"
              >
                {social.name}
              </a>
            ))}
          </div>
        </FadeIn>

        {/* Footer Credit */}
        <div className="mt-32 text-gray-400 text-xs tracking-widest font-medium">
          © {new Date().getFullYear()} CHETAN MULGE. ALL RIGHTS RESERVED.
        </div>

      </div>
    </section>
  );
}