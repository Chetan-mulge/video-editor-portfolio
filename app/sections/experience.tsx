"use client";
import { motion } from "framer-motion";
import Image from "next/image";


export default function Experience() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(168,85,247,0.12),transparent_70%)]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-semibold text-center mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Experience that drives results
        </motion.h2>

        <motion.p
          className="text-center text-gray-400 max-w-2xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          I focus on editing that improves reach, retention, and audience
          connection — not just aesthetics.
        </motion.p>

        {/* 🔢 IMPACT STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {[
            { value: "7K+", label: "Organic Followers Grown" },
            { value: "100+", label: "Reels Edited" },
            { value: "↑ Retention", label: "Audience-Focused Cuts" },
            { value: "Consistency", label: "Long-Term Growth Mindset" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 text-center"
              initial={{ opacity: 0, y: 40, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-3xl font-semibold text-purple-400">
                {stat.value}
              </p>
              <p className="text-sm text-gray-400 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* 🧱 EXPERIENCE CARDS */}
        <div className="grid md:grid-cols-2 gap-10 mb-24">
          {[
            {
              title: "Instagram Food Blogging Page",
              desc:
                "Built and managed a niche food-blogging page from scratch, growing it to 7,000+ followers organically through short-form reels, trends, and consistent storytelling.",
            },
            {
              title: "Numerologist Brand — Social Media",
              desc:
                "Currently editing and managing reels for a professional numerologist, focusing on clarity, engagement hooks, and content structure that keeps viewers watching.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="relative bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-medium mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 💬 TESTIMONIALS */}
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              quote:
                "Chetan understood exactly how to edit reels for growth. The consistency and quality made a visible difference.",
              author: "Food Blogging Page Owner",
            },
            {
              quote:
                "His edits helped simplify complex ideas into engaging reels that people actually watch till the end.",
              author: "Numerologist Brand",
            },
          ].map((t, i) => (
            <motion.div
              key={i}
              className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-300 text-sm mb-4">“{t.quote}”</p>
              <p className="text-xs text-gray-500">— {t.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
