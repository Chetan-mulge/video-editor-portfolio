"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center px-6 grain">
      {/* 🎥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* 🌑 Cinematic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />

      {/* 🌟 Content */}
      <div
        className={`relative z-10 max-w-4xl text-center transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      >
        {/* 👋 Identity */}
        <h1 className="text-5xl md:text-7xl font-bold text-purple-400">
          Hi, I’m Chetan
        </h1>

        {/* 🎯 Value Proposition */}
        <p className="mt-5 text-xl md:text-2xl text-white">
          Cinematic Reels & Scroll-Stopping Edits
        </p>
        <p className="mt-1 text-gray-300">for Creators & Brands</p>

        {/* 🧩 Service Chips */}
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          {["Instagram Reels", "YouTube Edits", "Motion Graphics"].map(
            (item, i) => (
              <span
                key={item}
                className={`px-4 py-2 rounded-full bg-white/10 text-sm text-gray-200
                transition-all duration-500
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
                style={{ transitionDelay: `${300 + i * 120}ms` }}
              >
                {item}
              </span>
            )
          )}
        </div>

        {/* 🔘 CTA */}
        <div className="mt-12 flex justify-center gap-6 items-center">
          <a
            href="#showwork"
            className="interactive bg-purple-600 px-8 py-3 rounded-lg text-white"
          >
            View Show Work
          </a>

          <a
            href="#contact"
            className="text-gray-300 hover:text-white transition"
          >
            Contact me →
          </a>
        </div>

        {/* 📷 Instagram (subtle, premium) */}
        <div className="mt-8 relative group inline-block">
          <a
            href="https://www.instagram.com/_chetan.mulge_/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 opacity-70 hover:opacity-100 transition"
          >
            Instagram
          </a>
          <span
            className="absolute left-1/2 -translate-x-1/2 top-full mt-2
            text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition"
          >
            view my edits →
          </span>
        </div>
      </div>
    </section>
  );
}
