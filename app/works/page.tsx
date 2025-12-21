"use client";
import Link from "next/link";
import { motion } from "framer-motion";

// ✅ CORRECT PATHS FOR SUBFOLDERS
// Make sure the filenames (reel1.mp4 etc.) match your files EXACTLY.
const allVideos = [
  // From the 'reels' folder
  "/videos/reels/work1.mp4",
  "/videos/reels/work2.mp4",
  "/videos/reels/work3.mp4",
  "/videos/reels/work4.mp4",
  "/videos/reels/work5.mp4",
  "/videos/reels/work6.mp4",
 // "/videos/travel/travel-1.mp4",
  "/videos/travel/travel-2.mp4",
  
  // From the 'travel' folder (merged here)
  //"/videos/travel/travel1.mp4",
  //"/videos/travel/travel2.mp4",
];

export default function MasterGallery() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] p-6 pt-24">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12 text-center">
         <Link href="/" className="text-gray-400 hover:text-[#D4AF37] text-sm uppercase tracking-widest mb-4 inline-block">
           ← Back to Home
         </Link>
         <h1 className="text-4xl md:text-6xl font-serif text-white mb-2">
           My <span className="text-[#D4AF37]">Portfolio</span>
         </h1>
         <p className="text-gray-400">All projects. One place.</p>
      </div>

      {/* THE MASTER GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {allVideos.map((src, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 relative shadow-lg aspect-[9/16] group hover:border-[#D4AF37]/50 transition-colors"
          >
            <video
              src={src}
              controls
              playsInline
              preload="metadata" // Shows the first frame instead of black
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