export default function ReelWorks() {
  const reels = [
    "/videos/reels/work1.mp4",
    "/videos/reels/work2.mp4",
    "/videos/reels/work3.mp4",
    "/videos/reels/work4.mp4",
    "/videos/reels/work5.mp4",
    "/videos/reels/work6.mp4",
  ];

  return (
    <main className="min-h-screen px-6 py-20 text-white">
      <h1 className="text-3xl font-bold mb-8">Instagram Reels 🎬</h1>

      <div className=" grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
        {reels.map((src, i) => (
          <div key={i} className="w-[220px] aspect-[9/16] bg-black rounded-xl overflow-hidden mx-auto">
            <video
              src={src}
              controls
              playsInline
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
