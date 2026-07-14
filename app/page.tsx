import type { Metadata } from "next";
import HeroSection from "./components/HeroSection";
export const metadata: Metadata = {
  title: "Chetan Mulge | Video Editor",
  description:
    "Chetan Mulge – Video Editor & Motion Designer. Portfolio showcasing cinematic edits, reels, and creative storytelling.",
};

export default function Home() {
  return (
    <main style={{ background: "#07060a", color: "#fff", fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <HeroSection />

      {/* ── EXPERIENCE ───────────────────────────────────────────────────────── */}
      <section id="experience" style={{ padding: "100px 60px", maxWidth: 1200, margin: "0 auto" }}>
        <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 10, letterSpacing: "4px", textTransform: "uppercase", marginBottom: 48 }}>
          My Experience
        </p>
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 15, marginBottom: 64, maxWidth: 600 }}>
          From growing a Food Blog to 7K+ followers to handling end-to-end production for Numerology Brands.
        </p>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, marginBottom: 80 }}>
          {[
            { val: "7K+", label: "Followers Gained (Food Blog)" },
            { val: "100%", label: "Client Satisfaction" },
            { val: "2+ Yrs", label: "Content Experience" },
          ].map((s) => (
            <div
              key={s.label}
              style={{
                padding: "40px 32px",
                border: "0.5px solid rgba(255,255,255,0.07)",
              }}
            >
              <div style={{ fontSize: 48, fontWeight: 900, letterSpacing: "-2px", color: "#fff", lineHeight: 1 }}>
                {s.val}
              </div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", letterSpacing: "2px", textTransform: "uppercase", marginTop: 12 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Projects */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1 }}>
          {[
            {
              tag: "Past Project",
              title: "Food Blogging",
              desc: "Built a page from scratch to 7,000+ followers using high-retention editing and consistent posting strategies.",
            },
            {
              tag: "Current Role",
              title: "Numerology Brand",
              desc: "Managing full-stack production: Planning shoots, camera handling, and editing reels that drive client leads.",
            },
          ].map((p) => (
            <div key={p.title} style={{ padding: "40px 32px", border: "0.5px solid rgba(255,255,255,0.07)" }}>
              <div style={{ fontSize: 9, letterSpacing: "3px", textTransform: "uppercase", color: "rgba(255,110,60,0.7)", marginBottom: 16 }}>
                {p.tag}
              </div>
              <div style={{ fontSize: 22, fontWeight: 700, color: "#fff", marginBottom: 16 }}>{p.title}</div>
              <div style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}>{p.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SELECTED WORKS ───────────────────────────────────────────────────── */}
      <section id="works" style={{ padding: "80px 60px", borderTop: "0.5px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 10, letterSpacing: "4px", textTransform: "uppercase", marginBottom: 16 }}>
            Selected Works
          </p>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, marginBottom: 56 }}>Handpicked edits.</p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }}>
            {[
              { src: "/videos/travel/travel-1.mp4", title: "Travel Edit V1", tag: "Cinematic Vertical" },
              { src: "/videos/reels/work1.mp4",     title: "Viral Reel",     tag: "High Retention"    },
              { src: "/videos/reels/work3.mp4",     title: "Brand Promo",    tag: "Commercial Style"  },
            ].map((w) => (
              <div key={w.title} style={{ position: "relative", aspectRatio: "9/16", overflow: "hidden", background: "#111" }}>
                <video
                  src={w.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.85 }}
                />
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0,
                  padding: "24px 16px",
                  background: "linear-gradient(transparent, rgba(0,0,0,0.85))",
                }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#fff", letterSpacing: "1px" }}>{w.title}</div>
                  <div style={{ fontSize: 9, color: "rgba(255,255,255,0.4)", letterSpacing: "2.5px", textTransform: "uppercase", marginTop: 4 }}>{w.tag}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 40, textAlign: "center" }}>
            <a
              href="/works"
              style={{
                display: "inline-block",
                padding: "12px 36px",
                border: "0.5px solid rgba(255,255,255,0.18)",
                color: "rgba(255,255,255,0.6)",
                fontSize: 10,
                letterSpacing: "3px",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              View All Projects →
            </a>
          </div>
        </div>
      </section>

      {/* ── ARSENAL ──────────────────────────────────────────────────────────── */}
      <section style={{ padding: "80px 60px", borderTop: "0.5px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 10, letterSpacing: "4px", textTransform: "uppercase", marginBottom: 48 }}>
            My Arsenal
          </p>
          <div style={{ display: "flex", gap: 40, flexWrap: "wrap", alignItems: "center" }}>
            {[
              { src: "/logos/premiere.png",     name: "Premiere Pro"    },
              { src: "/logos/aftereffects.png", name: "After Effects"   },
              { src: "/logos/davinci.png",       name: "DaVinci Resolve" },
              { src: "/logos/capcut.png",        name: "CapCut"          },
              { src: "/logos/photoshop.png",     name: "Photoshop"       },
            ].map((t) => (
              <div key={t.name} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={t.src} alt={t.name} style={{ width: 36, height: 36, objectFit: "contain", opacity: 0.7 }} />
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", letterSpacing: "1px" }}>{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT I DO ────────────────────────────────────────────────────────── */}
      <section style={{ padding: "80px 60px", borderTop: "0.5px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 10, letterSpacing: "4px", textTransform: "uppercase", marginBottom: 48 }}>
            What I Do
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 1 }}>
            {[
              { icon: "⚡", title: "Instagram Reels",    desc: "High-retention editing designed to stop the scroll. I use fast pacing and dynamic captions to keep viewers watching till the end." },
              { icon: "🎬", title: "Cinematic Editing",  desc: "Storytelling focused. I craft travel films and brand documentaries that prioritize emotion, sound design, and narrative flow." },
              { icon: "🎨", title: "Color Grading",      desc: "Transforming raw LOG footage into vibrant, moody, or professional looks that align with your brand's unique aesthetic." },
              { icon: "🔊", title: "Sound Design",       desc: "The invisible layer. I use immersive SFX, audio transitions, and seamless music syncing to drive the video's rhythm." },
            ].map((s) => (
              <div key={s.title} style={{ padding: "40px 32px", border: "0.5px solid rgba(255,255,255,0.07)" }}>
                <div style={{ fontSize: 22, marginBottom: 16 }}>{s.icon}</div>
                <div style={{ fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 12 }}>{s.title}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.38)", lineHeight: 1.75 }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────────────────────── */}
      <section style={{ padding: "80px 60px", borderTop: "0.5px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 10, letterSpacing: "4px", textTransform: "uppercase", marginBottom: 48 }}>
            Behind the Edits
          </p>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.7)", lineHeight: 1.85, marginBottom: 32 }}>
            I&apos;m Chetan Mulge, a video editor who obsesses over the details that others miss. My philosophy is simple:{" "}
            <em>Attention is currency.</em> I don&apos;t just cut footage — I engineer retention using psychology-based pacing and immersive sound design.
          </p>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.4)", lineHeight: 1.85 }}>
            My background is unique — I combine the technical discipline of a Master of Computer Applications (MCA) scholar with the creative flow of a visual artist.
            This allows me to approach every project with both structure and soul, ensuring your videos are not only beautiful but strategically built to convert.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 40 }}>
            {["MCA Scholar", "Visual Storyteller"].map((b) => (
              <div
                key={b}
                style={{
                  padding: "6px 16px",
                  border: "0.5px solid rgba(255,255,255,0.14)",
                  color: "rgba(255,255,255,0.35)",
                  fontSize: 9,
                  letterSpacing: "2.5px",
                  textTransform: "uppercase",
                  borderRadius: 2,
                }}
              >
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────────────────── */}
      <section id="contact" style={{ padding: "100px 60px", borderTop: "0.5px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}>
          <div>
            <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 10, letterSpacing: "4px", textTransform: "uppercase", marginBottom: 32 }}>
              Let&apos;s Create
            </p>
            <p style={{ fontSize: 32, fontWeight: 900, color: "#fff", lineHeight: 1.2, marginBottom: 24 }}>
              Ready to scale your content?
            </p>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}>
              I&apos;m currently accepting new projects.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, justifyContent: "center" }}>
            <a
              href="mailto:mulge10chetan@gmail.com"
              style={{
                display: "block",
                padding: "16px 24px",
                border: "0.5px solid rgba(255,255,255,0.1)",
                color: "rgba(255,255,255,0.6)",
                fontSize: 13,
                letterSpacing: "1px",
                textDecoration: "none",
              }}
            >
              mulge10chetan@gmail.com →
            </a>
            <a
              href="https://wa.me/917996591319"
              style={{
                display: "block",
                padding: "16px 24px",
                border: "0.5px solid rgba(255,255,255,0.1)",
                color: "rgba(255,255,255,0.6)",
                fontSize: 13,
                letterSpacing: "1px",
                textDecoration: "none",
              }}
            >
              Chat on WhatsApp →
            </a>
            <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
              <a
                href="https://www.instagram.com/_chetan.mulge_"
                style={{ padding: "8px 20px", border: "0.5px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.35)", fontSize: 10, letterSpacing: "2px", textDecoration: "none", textTransform: "uppercase" }}
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/chetan-m-87a4562a4"
                style={{ padding: "8px 20px", border: "0.5px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.35)", fontSize: 10, letterSpacing: "2px", textDecoration: "none", textTransform: "uppercase" }}
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────────── */}
      <footer style={{
        padding: "24px 60px",
        borderTop: "0.5px solid rgba(255,255,255,0.06)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <span style={{ fontSize: 9, color: "rgba(255,255,255,0.18)", letterSpacing: "2px", textTransform: "uppercase" }}>
          © 2026 Chetan Mulge. All Rights Reserved.
        </span>
        <span style={{ fontSize: 9, color: "rgba(255,255,255,0.12)", letterSpacing: "2px", textTransform: "uppercase" }}>
          motions.by.chetan
        </span>
      </footer>
    </main>
  );
}