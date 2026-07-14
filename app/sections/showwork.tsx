"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const works = [
  { id: 1, src: "/videos/reels/work1.mp4", title: "Gaming Edit" },
  { id: 2, src: "/videos/reels/work2.mp4", title: "Food Promo" }, // Changed name
  { id: 3, src: "/videos/reels/work3.mp4", title: "Brand Story" }, // Changed name
  { id: 4, src: "/videos/reels/work1.mp4", title: "Retention Reel" },
];

export default function Showwork() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-65%"]);

  return (
    <section ref={targetRef} className="relative h-[250vh] bg-black">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="px-6 md:px-20 mb-10">
          <h2 className="font-bebas text-7xl md:text-9xl outline-text">The Proof</h2>
        </div>

        <motion.div style={{ x }} className="flex gap-4 md:gap-8 items-center px-6">
          {works.map((work) => (
            <div key={work.id} className="relative w-[75vw] md:w-[350px] aspect-[9/16] bg-zinc-900 rounded-[2rem] overflow-hidden flex-shrink-0 border border-white/10">
              <video src={work.src} autoPlay muted loop playsInline className="w-full h-full object-cover grayscale md:group-hover:grayscale-0 transition-all duration-700" />
              {/* Visible by default on mobile, hover on desktop */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent flex items-end p-8 opacity-100 md:opacity-0 md:group-hover:opacity-100">
                <p className="font-bebas text-2xl italic text-white uppercase tracking-tighter">{work.title}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}