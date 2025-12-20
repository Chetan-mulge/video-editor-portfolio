"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-24 px-6 text-white text-center">
      <motion.h2
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        About Me 👋
      </motion.h2>

      <motion.p
        className="max-w-2xl mx-auto text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        I’m Chetan, a video editor focused on cinematic storytelling,
        Instagram reels, and scroll-stopping visuals.
      </motion.p>
    </section>
  );
}
