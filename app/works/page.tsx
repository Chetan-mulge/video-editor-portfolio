"use client";

import Link from "next/link";
import { motion } from "framer-motion";

// =========================
// MASTER VIDEO GALLERY
// =========================

const allVideos = [
  // =========================
  // REELS
  // =========================
  "/videos/reels/work1.mp4",
  "/videos/reels/work2.mp4",
  "/videos/reels/work3.mp4",
  "/videos/reels/work4.mp4",
  "/videos/reels/work5.mp4",
  "/videos/reels/work6.mp4",

  // =========================
  // TRAVEL
  // =========================
  "/videos/travel/travel-1.mp4",
  "/videos/travel/travel-2.mp4",

  // =========================
  // COMMERCIALS
  // =========================
  "/videos/commercials/commercials1.mp4",
  "/videos/commercials/commercials2.mp4",
  "/videos/commercials/commercials3.mp4",
];

export default function MasterGallery() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] px-6 pt-24 pb-12">

      {/* ================= HEADER ================= */}
      <div className="max-w-7xl mx-auto mb-12 text-center">

        <Link
          href="/"
          className="text-gray-400 hover:text-[#D4AF37] text-sm uppercase tracking-[0.2em] mb-4 inline-block transition-colors"
        >
          ← Back to Home
        </Link>

        <h1 className="text-4xl md:text-6xl font-serif text-white mb-3">
          My <span className="text-[#D4AF37]">Portfolio</span>
        </h1>

        <p className="text-gray-400 text-lg">
          Reels • Travel • Commercial Projects
        </p>

      </div>

      {/* ================= VIDEO GRID ================= */}

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {allVideos.map((src, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
            whileHover={{ y: -6 }}
            className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-xl hover:border-[#D4AF37]/60 transition-all aspect-[9/16]"
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