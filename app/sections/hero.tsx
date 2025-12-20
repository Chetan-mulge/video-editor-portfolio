"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const fullName = "Chetan";
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    let index = 0;

    const typingInterval = setInterval(() => {
      if (index < fullName.length) {
        setText((prev) => prev + fullName[index]);
        index++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setShowCursor(false); // cursor fades
          setShowContent(true); // show rest of content
        }, 400);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      {/* Name Animation */}
      <h1 className="text-5xl md:text-7xl font-bold">
        Hi, I’m{" "}
        <span className="text-purple-400">
          {text}
          {showCursor && <span className="animate-pulse">|</span>}
        </span>
      </h1>

      {/* Rest of content */}
      {showContent && (
        <div className="mt-6 animate-fadeIn">
          <p className="text-lg md:text-xl text-gray-300">
            Video Editor & Motion Designer
          </p>

          <p className="mt-4 max-w-2xl text-gray-400">
            I create cinematic edits, reels, and visual stories that grab
            attention.
          </p>

          <div className="mt-8 flex gap-4 justify-center">
            <a
              href="https://instagram.com/YOUR_INSTAGRAM_USERNAME"
              target="_blank"
              className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold transition"
            >
              View Instagram Reels
            </a>

            <a
              href="#contact"
              className="border border-purple-400 px-6 py-3 rounded-lg transition"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
