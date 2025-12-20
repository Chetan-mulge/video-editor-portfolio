export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 text-center">
      <h2 className="text-4xl font-bold mb-6">Let’s Work Together</h2>

      <p className="text-gray-400 mb-6">
        Email: mulge10chetan@email.com
      </p>

      <div className="flex justify-center gap-6 text-purple-500">
        <a
           href="https://www.instagram.com/_chetan.mulge_/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-purple-400 transition"
          >
          Instagram
        </a>
        
        <a
          href="https://www.linkedin.com/in/chetan-m-87a4562a4"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-purple-400 transition"
          >
          Linkedin
          </a>

          <div className="relative group cursor-not-allowed">
           <span className="text-gray-400 opacity-60">
           YouTube
         </span>

          <span
           className="absolute left-1/2 -translate-x-1/2 top-full mt-2
           text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition
          whitespace-nowrap"
          >
           not on YouTube yet 🎬
           </span>
          </div>
  
      </div>
    </section>
  );
}

