import type { Metadata } from "next";
import { Bebas_Neue, Outfit } from "next/font/google"; // Swapped to sexy fonts
import "./globals.css";
import Cursor from "./components/cursor";

const bebas = Bebas_Neue({ 
  weight: "400", 
  subsets: ["latin"], 
  variable: "--font-bebas" 
});

const outfit = Outfit({ 
  subsets: ["latin"], 
  variable: "--font-outfit" 
});

export const metadata: Metadata = {
  title: "Chetan Mulge | Video Editor",
  description: "Chetan Mulge – Video Editor & Motion Designer. Portfolio showcasing cinematic edits, reels, and creative storytelling.",
  verification: {
    google: "aig4CVUIKaBTY_ssHkWScJyeQ0HhOfcgfRAZIX8SIco", // Kept your code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebas.variable} ${outfit.variable} dark`}>
      <body className="antialiased font-outfit bg-black text-white">
        <Cursor />
        {children}
      </body>
    </html>
  );
}