export default function Showreel() {
  return (
    <section className="py-24 px-6 flex justify-center">
      <div className="w-full max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Showreel
        </h2>

        <div className="relative py-28 section-blend aspect-video rounded-xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=YOUR_VIDEO_ID"
            title="Showreel"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
