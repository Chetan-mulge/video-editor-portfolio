"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
      style={{
        width: "6px",
        height: "6px",
        backgroundColor: "#FFFFFF", // Pure White
        boxShadow: "0 0 12px 2px rgba(255, 255, 255, 0.8)", // White Glow
      }}
      animate={{ 
        x: mousePosition.x + 12, // Offset to right
        y: mousePosition.y + 12  // Offset to bottom
      }}
      transition={{ 
        type: "spring", 
        stiffness: 1000, // Instant movement
        damping: 50,
        mass: 0.1
      }} 
    />
  );
}