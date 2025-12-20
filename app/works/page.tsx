import Link from "next/link";

export default function WorksHome() {
  return (
    <main className="min-h-screen px-6 py-24 text-white text-center">
      <h1 className="text-4xl font-bold mb-12">My Works</h1>

      <div className="flex flex-col sm:flex-row justify-center gap-6">
        <Link
          href="/works/travel"
          className="px-8 py-4 rounded-xl bg-purple-600 hover:bg-purple-700 transition"
        >
          Travel (2 videos)
        </Link>

        <Link
          href="/works/reels"
          className="px-8 py-4 rounded-xl bg-purple-600 hover:bg-purple-700 transition"
        >
          Instagram Reels (6 videos)
        </Link>

        <div className="px-8 py-4 rounded-xl bg-white/10 cursor-not-allowed">
          YouTube (coming soon 🚧)
        </div>
      </div>
    </main>
  );
}
