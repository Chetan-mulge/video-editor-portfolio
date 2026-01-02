import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Cursor from "./components/cursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chetan Mulge | Video Editor",
  description: "Chetan Mulge – Video Editor & Motion Designer. Portfolio showcasing cinematic edits, reels, and creative storytelling.",
  // 👇 THIS IS THE GOOGLE VERIFICATION CODE
  verification: {
    google: "aig4CVUIKaBTY_ssHkWScJyeQ0HhOfcgfRAZIX8SIco",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* 👇 I added this back so your mouse effect works */}
        <Cursor />
        {children}
      </body>
    </html>
  );
}