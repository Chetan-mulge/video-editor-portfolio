export default function TravelWorks() {
  const videos = [
    "/videos/travel/travel-1.mp4",
    "/videos/travel/travel-2.mp4",
  ];

  return (
    <main className="min-h-screen px-6 py-20 text-white">
      <h1 className="text-3xl font-bold mb-8">Travel Cinematic Reels 🌍</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
        {videos.map((src, i) => (
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
