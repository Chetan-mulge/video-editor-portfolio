"use client";
import FadeIn from "../components/FadeIn";

export default function Contact() {
  // 👇 YOUR WHATSAPP NUMBER
  const whatsappNumber = "917996591319"; 

  return (
    <section id="contact" className="py-24 px-4 md:px-6 relative z-20 text-center overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        <FadeIn>
          <h2 className="text-5xl md:text-9xl font-serif text-white mb-8 tracking-tighter drop-shadow-2xl">
            Let's <span className="text-[#D4AF37]">Create</span>
          </h2>
          <p className="text-gray-300 text-lg md:text-2xl mb-12 max-w-2xl mx-auto font-light">
            Ready to scale your content? I'm currently accepting new projects.
          </p>
        </FadeIn>

        {/* --- EMAIL SECTION (FIXED) --- */}
        <FadeIn delay={0.2}>
          <div className="relative inline-block group max-w-full mb-12 px-2">
            <a 
              href="mailto:mulge10chetan@gmail.com" 
              // 👇 CRITICAL FIX: Changed 'break-words' to 'break-all'
              // 👇 SIZE FIX: Changed 'text-xl' to 'text-lg' for small mobiles
              className="relative z-10 inline-block text-lg sm:text-3xl md:text-6xl font-bold text-white transition-all border-b-2 border-white/20 group-hover:border-[#D4AF37] group-hover:text-[#D4AF37] pb-2 md:pb-4 break-all"
            >
              mulge10chetan@gmail.com
            </a>
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-[#D4AF37] blur-[100px] opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
          </div>
        </FadeIn>

        {/* --- WHATSAPP BUTTON --- */}
        <FadeIn delay={0.25}>
          <div className="flex justify-center mb-16">
            <a 
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 bg-white/5 hover:bg-[#25D366] border border-white/10 hover:border-[#25D366] rounded-full transition-all duration-300 transform hover:scale-105 backdrop-blur-md shadow-lg"
            >
              {/* WhatsApp Icon */}
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:w-6 md:h-6 text-[#25D366] group-hover:text-white transition-colors">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.698c.93.509 1.937.784 2.806.784 3.181 0 5.767-2.587 5.767-5.766.001-3.181-2.585-5.767-5.767-5.767zm6.075 8.705c-.255.718-1.465 1.344-2.007 1.401-.527.054-1.226.236-4.366-1.002-4.22-1.666-4.595-5.917-4.636-6.142-.045-.25-.045-.308.571-.622.257-.13.56-.264.787-.208.232.057.493.366.716.822.072.148.271.668.318.784.048.117.062.245-.044.444-.136.252-.284.428-.426.568-.13.128-.277.29-.117.564.161.275.706 1.157 1.517 1.879 1.05 1.05 1.94 1.375 2.217 1.516.276.14.436.117.598-.072.162-.189.682-.792.862-1.063.18-.271.359-.226.602-.135.242.09.141.06 1.436.711.647.324.774.407.868.618.094.212.094 1.157-.161 1.875z"/>
              </svg>
              <span className="text-white font-bold text-base md:text-lg tracking-wide group-hover:text-white">Chat on WhatsApp</span>
            </a>
          </div>
        </FadeIn>

        {/* --- SOCIAL LINKS --- */}
        <FadeIn delay={0.3}>
          <div className="inline-flex flex-wrap justify-center gap-4 md:gap-12 bg-black/40 backdrop-blur-md px-6 py-4 md:px-10 md:py-6 rounded-3xl border border-white/10">
            {[
              { name: "Instagram", url: "https://www.instagram.com/_chetan.mulge_?igsh=aG4xYTQ0b3dncGQw&utm_source=qr" },
              { name: "LinkedIn", url: "https://www.linkedin.com/in/chetan-m-87a4562a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-bold uppercase tracking-widest text-xs md:text-lg transition-all hover:text-[#D4AF37] hover:scale-110"
              >
                {social.name}
              </a>
            ))}
          </div>
        </FadeIn>

        <div className="mt-24 text-gray-400 text-[10px] md:text-xs tracking-widest font-medium">
          © {new Date().getFullYear()} CHETAN MULGE. ALL RIGHTS RESERVED.
        </div>

      </div>
    </section>
  );
}