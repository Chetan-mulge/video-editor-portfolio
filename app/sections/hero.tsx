"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
  const handleScroll = () => {
    const y = window.scrollY;
    document.documentElement.style.setProperty(
      "--parallax",
      `${y * 0.15}px`
    );
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  return (
   <section className="relative min-h-screen section-fade flex items-center justify-center px-6 overflow-hidden">
      {/* 🎥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* 🌑 Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/70 to-black/90" />
      
      {/* 🌟 Content */}
      <div
       className={`relative z-10 max-w-3xl text-center transition-all duration-700 ease-out
       ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
       style={{ transform: "translateY(var(--parallax))" }}
        >

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-purple-400">
          Hi, I’m Chetan
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-xl md:text-2xl text-white">
          Cinematic Reels & Scroll-Stopping Edits
        </p>
        <p className="text-gray-300">for Creators & Brands</p>

        {/* Services */}
        <div className="mt-6 flex flex-wrap justify-center gap-3">
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

        {/* CTA */}
        <div className="mt-10 flex justify-center gap-6 items-center">
          <button
            onClick={() =>
              document
                .getElementById("showwork")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="interactive bg-purple-600 px-8 py-3 rounded-lg text-white hover:scale-105 transition"
          >
            View My Works
          </button>

          <a
            href="#contact"
            className="text-gray-300 hover:text-white transition"
          >
            Contact me →
          </a>
        </div>
      </div>
    </section>
  );
}
