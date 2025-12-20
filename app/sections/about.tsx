"use client";

import { useEffect, useState } from "react";

export default function About() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 200);
  }, []);

  return (
    <section
      id="about"
      className="py-28 px-6 max-w-4xl mx-auto text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8">
        About Me
      </h2>

      <p
        className={`text-lg text-gray-300 transition-all duration-700
        ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        I’m a freelance video editor focused on cinematic storytelling,
        smooth transitions, and edits that hold attention. 
        I along with my friend have also experience in making a insta page (food blogging) of around 7T followers(not now) 
      </p>

      <p
        className={`mt-4 text-gray-400 transition-all duration-700 delay-200
        ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        I’m constantly learning, experimenting, and upgrading my skills
        to match current trends and platform algorithms.
      </p>
    </section>
  );
}
