"use client";
import Link from "next/link";
import { motion } from "framer-motion";

// ⚠️ IMPORTANT: Only list the 2 videos you actually have.
// If you add more later, just add a new line here.
const videos = [
  "/videos/travel/travel1.mp4", // Change this to your real filename
  "/videos/travel/travel2.mp4", // Change this to your real filename
];

export default function TravelPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] p-6 pt-24">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12 text-center">
         <Link href="/works" className="text-gray-400 hover:text-[#D4AF37] text-sm uppercase tracking-widest mb-4 inline-block">
           ← Back to Categories
         </Link>
         <h1 className="text-4xl md:text-6xl font-serif text-white">
           Travel <span className="text-[#D4AF37]">Films</span>
         </h1>
      </div>

      {/* Video Grid - Centered & Sized Correctly */}
      <div className="flex flex-wrap justify-center gap-8">
        {videos.map((src, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            // max-w-2xl makes sure they don't get too big on huge screens
            className="w-full max-w-2xl rounded-2xl overflow-hidden border border-white/10 bg-white/5 relative shadow-lg aspect-video"
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