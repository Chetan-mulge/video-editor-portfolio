"use client";
import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function LiquidCursor() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  
  // Spring makes it "Liquid" and smooth
  const x = useSpring(0, { stiffness: 250, damping: 20 });
  const y = useSpring(0, { stiffness: 250, damping: 20 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      x.set(e.clientX - 12);
      y.set(e.clientY - 12);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [x, y]);

  return (
    <motion.div
      style={{ x, y }}
      className="fixed top-0 left-0 w-6 h-6 bg-white rounded-full mix-blend-difference pointer-events-none z-[9999]"
    />
  );
}