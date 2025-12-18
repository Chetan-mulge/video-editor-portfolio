export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl md:text-7xl font-bold">
        Hi, I’m <span className="text-purple-400">Your Name</span>
      </h1>

      <p className="mt-4 text-lg text-gray-300">
        Video Editor & Motion Designer
      </p>

      <p className="mt-6 max-w-xl text-gray-400">
        I create cinematic edits, reels, and visual stories that grab attention.
      </p>

      <div className="mt-8 flex gap-4">
        <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold">
          Watch Showreel
        </button>

        <button className="border border-purple-400 px-6 py-3 rounded-lg">
          Contact Me
        </button>
      </div>
    </section>
  );
}
