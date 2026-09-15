import React, { useEffect, useState, Suspense } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

// Lazy load heavier sections
const Projects = React.lazy(() => import("./components/Projects"));
const Contact = React.lazy(() => import("./components/Contact"));

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

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

  return (
    <div className="min-h-screen bg-portfolio-surface font-sans text-portfolio-text dark:bg-portfolio-dark-surface dark:text-portfolio-dark-text">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <main>
        <Hero />
        <About />
        <Skills />

        <Suspense
          fallback={
            <div className="px-6 py-20 text-center text-portfolio-muted dark:text-portfolio-dark-muted">
              Loading Projects...
            </div>
          }
        >
          <Projects />
        </Suspense>

        <Suspense
          fallback={
            <div className="px-6 py-20 text-center text-portfolio-muted dark:text-portfolio-dark-muted">
              Loading Contact...
            </div>
          }
        >
          <Contact />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
};

export default App;
