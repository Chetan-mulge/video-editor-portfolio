const projects = [
  {
    title: "Travel Cinematic Reel",
    tools: "Premiere Pro + After Effects",
    link: "VIDEO_LINK",
  },
  {
    title: "Instagram Reel Edit",
    tools: "Premiere Pro",
    link: "VIDEO_LINK",
  },
  {
    title: "YouTube Video Edit",
    tools: "Premiere Pro",
    link: "VIDEO_LINK",
  },
];

export default function Projects() {
  return (
    <section className="py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-10">Featured Work</h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {projects.map((p, i) => (
          <a
            key={i}
            href={p.link}
            className="border border-gray-700 p-6 rounded-xl hover:border-purple-500 transition"
          >
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="text-gray-400 mt-2">{p.tools}</p>
            <p className="mt-4 text-purple-500">Watch Video →</p>
          </a>
        ))}
      </div>
    </section>
  );
}
