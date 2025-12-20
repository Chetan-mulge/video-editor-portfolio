"use client";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section className="py-24 px-6 text-white">
      <motion.h2
        className="text-3xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Experience 🚀
      </motion.h2>

      <div className="max-w-3xl mx-auto space-y-8">
        <motion.div
          className="bg-white/5 p-6 rounded-xl"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          🍔 I previously built and managed a food blogging Instagram page,
           growing it to 7,000+ followers organically.
        </motion.div>

        <motion.div
          className="bg-white/5 p-6 rounded-xl"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          🔮   Currently, I manage and create content for a professional
          numerologist’s social media profile, focusing on reels,
storytelling, and audience retention.
        </motion.div>
      </div>
    </section>
  );
}
