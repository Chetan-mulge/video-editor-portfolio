"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-32 px-6 md:px-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="font-bebas text-7xl md:text-9xl mb-16 outline-text tracking-tighter">
          The Journey
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <p className="text-2xl md:text-3xl text-zinc-400 leading-tight font-light font-outfit">
              Started in the world of <span className="text-white italic font-medium">Food Blogging</span>, 
              capturing the soul of flavor through a lens. This evolved into an obsession 
              with <span className="text-white font-medium">Visual Engineering</span>.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-6 py-3 border border-white/10 rounded-full text-[10px] uppercase tracking-[0.3em] bg-white/5 backdrop-blur-sm">
                Food Content
              </span>
              <span className="px-6 py-3 border border-white/10 rounded-full text-[10px] uppercase tracking-[0.3em] bg-white/5 backdrop-blur-sm">
                Retention Specialist
              </span>
            </div>
          </div>
          
          {/* FIXED: No longer an empty box. Now features a video-masked memory card */}
          <motion.div 
            whileHover={{ scale: 0.98, rotate: -1 }}
            className="aspect-video bg-zinc-900 rounded-[2.5rem] border border-white/10 flex items-center justify-center relative overflow-hidden group shadow-2xl"
          >
             {/* Background Video for the card */}
             <video 
               src="/videos/reels/work1.mp4" 
               autoPlay muted loop playsInline 
               className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-700"
             />
             
             <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
             
             <div className="relative z-10 text-center">
               <p className="text-white font-bebas text-5xl md:text-7xl leading-none transition-transform duration-500 group-hover:scale-110">
                 Blogger <br/> <span className="text-zinc-500">To</span> <br/> Storyteller
               </p>
             </div>
          </motion.div>
        </div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute -bottom-20 -left-20 text-[20vw] font-bebas text-white/[0.02] pointer-events-none select-none uppercase">
        History
      </div>
    </section>
  );
<motion.div 
  whileHover={{ scale: 0.98, rotate: -1 }}
  className="aspect-video bg-zinc-900 rounded-[2.5rem] border border-white/10 flex items-center justify-center relative overflow-hidden group shadow-2xl"
>
   {/* This video makes the box alive */}
   <video 
     src="/videos/reels/work1.mp4" 
     autoPlay muted loop playsInline 
     className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-50 transition-opacity duration-700"
   />
   <div className="relative z-10 text-center">
     <p className="text-white font-bebas text-5xl md:text-7xl leading-none">
       Blogger <br/> <span className="text-zinc-500">To</span> <br/> Storyteller
     </p>
   </div>
</motion.div>

}