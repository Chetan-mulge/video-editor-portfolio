"use client";
import { useRouter } from "next/navigation";

export default function ShowWork() {
  const router = useRouter();

  return (
    <section
      id="showwork"
      className="py-32 px-6 text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-10">
        My Works
      </h2>

      <div className="flex flex-col sm:flex-row justify-center gap-6">
        <button
          onClick={() => router.push("/works/travel")}
          className="bg-purple-600 px-8 py-4 rounded-xl hover:scale-105 transition"
        >
          Travel Films (2)
        </button>

        <button
          onClick={() => router.push("/works/reels")}
          className="bg-purple-600 px-8 py-4 rounded-xl hover:scale-105 transition"
        >
          Instagram Reels (6+)
        </button>

        <button
          disabled
          className="bg-white/10 px-8 py-4 rounded-xl cursor-not-allowed text-gray-400"
        >
          YouTube Edits (Coming Soon)
        </button>
      </div>
    </section>
  );
}
