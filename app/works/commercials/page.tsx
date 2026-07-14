"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const videos = [
  "/videos/commercials/commercials1.mp4",
  "/videos/commercials/commercials2.mp4",
  "/videos/commercials/commercials3.mp4",
];

export default function CommercialsPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] p-6 pt-24">

      <div className="max-w-7xl mx-auto mb-12 text-center">
        <Link
          href="/works"
          className="text-gray-400 hover:text-[#D4AF37] text-sm uppercase tracking-widest mb-4 inline-block"
        >
          ← Back to Categories
        </Link>

        <h1 className="text-4xl md:text-6xl font-serif text-white">
          Commercial <span className="text-[#D4AF37]">Projects</span>
        </h1>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {videos.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
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