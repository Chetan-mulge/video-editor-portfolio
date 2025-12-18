export default function Services() {
  const services = [
    "Cinematic Video Editing",
    "Instagram Reels & Shorts",
    "Color Grading",
    "Smooth Cuts & Transitions",
    "Sound Design & Sync",
  ];

  return (
    <section className="py-20 px-6 text-center">
      <h2 className="text-4xl font-bold mb-10">What I Do</h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {services.map((item, i) => (
          <div
            key={i}
            className="bg-white/5 border border-white/10 backdrop-blur rounded-xl p-6 hover:border-purple-400 transition"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
