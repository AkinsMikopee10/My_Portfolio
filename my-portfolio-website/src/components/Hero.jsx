import React from "react";

/*
Hero Component
- Full-screen introduction section
- Shows name, tagline, and CTA button
- Styled with Tailwind gradient and spacing
*/
const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-indigo-50 to-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Michael</h1>
      <p className="text-xl md:text-2xl mb-6">
        Frontend Developer | React & Tailwind Enthusiast
      </p>
      <a
        href="#projects"
        className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 transition"
      >
        View Projects
      </a>
    </section>
  );
};

export default Hero;
