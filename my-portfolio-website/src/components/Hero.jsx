import React from "react";
import { ChevronDown } from "lucide-react"; // scroll cue icon

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-indigo-100 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300 px-6">
      {/* Headline */}
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-fadeIn">
        Hi, I'm Michael
      </h1>

      {/* Tagline */}
      <p className="text-lg md:text-2xl mb-8 text-gray-700 dark:text-gray-300 animate-fadeIn delay-200">
        Frontend Developer · React & Tailwind Enthusiast
      </p>

      {/* CTA Button */}
      <a
        href="#projects"
        className="px-8 py-3 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-500 hover:scale-105 hover:shadow-lg transition-transform duration-300"
      >
        View Projects
      </a>

      {/* Scroll Cue */}
      <div className="absolute bottom-6 animate-bounce">
        <a href="#about" aria-label="Scroll to About section">
          <ChevronDown
            size={32}
            className="text-indigo-600 dark:text-indigo-400"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
