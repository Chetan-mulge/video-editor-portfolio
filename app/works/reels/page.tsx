"use client";
import Link from "next/link";
import { motion } from "framer-motion";

// ⚠️ LIST YOUR REELS HERE. Delete any lines that are empty!
const videos = [
  "/videos/reels/reel1.mp4",
  "/videos/reels/reel2.mp4",
  "/videos/reels/reel3.mp4",
  "/videos/reels/reel4.mp4",
  "/videos/reels/reel5.mp4", 
  "/videos/reels/reel6.mp4", 
];

export default function ReelsPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] p-6 pt-24">
      
      <div className="max-w-7xl mx-auto mb-12 text-center">
         <Link href="/works" className="text-gray-400 hover:text-[#D4AF37] text-sm uppercase tracking-widest mb-4 inline-block">
           ← Back to Categories
         </Link>
         <h1 className="text-4xl md:text-6xl font-serif text-white">
           Instagram <span className="text-[#D4AF37]">Reels</span>
         </h1>
      </div>

      {/* Grid that centers items and auto-fits them */}
      <div className="flex flex-wrap justify-center gap-8">
        {videos.map((src, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            // w-[350px] forces them to look like a phone screen. Not giant.
            className="w-full max-w-[320px] md:max-w-[360px] rounded-3xl overflow-hidden border border-white/10 bg-white/5 relative shadow-lg aspect-[9/16]"
          >
            <video
              src={src}
              controls
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
            >
              Your browser does not support the video tag.
            </video>
          </motion.div>
        ))}
      </div>

    </main>
  );
}