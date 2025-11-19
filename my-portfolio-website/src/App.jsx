import React, { useEffect, useState, Suspense } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

// Lazy load heavy sections
const Projects = React.lazy(() => import("./components/Projects"));
const Contact = React.lazy(() => import("./components/Contact"));

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Load saved theme preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Persist theme preference
  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Scroll progress indicator
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-sans text-gray-900 bg-gray-50 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300 ease-in-out">
      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-indigo-600 dark:bg-indigo-400 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      {/* Header with dark mode toggle */}
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="scroll-smooth">
        <Hero />
        <About />
        <Skills />

        {/* Lazy-loaded sections */}
        <Suspense
          fallback={
            <div className="text-center py-20">Loading Projects...</div>
          }
        >
          <Projects />
        </Suspense>
        <Suspense
          fallback={<div className="text-center py-20">Loading Contact...</div>}
        >
          <Contact />
        </Suspense>
      </main>

      {/* Footer with top border */}
      <Footer />

      {/* Scroll-to-top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition"
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </div>
  );
};

export default App;
