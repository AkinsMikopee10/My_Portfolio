import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="font-sans text-gray-900 bg-gray-50 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Sticky header with shadow */}
      <Header />

      <main className="scroll-smooth">
        {/* Hero section with full viewport height */}
        <section
          id="hero"
          className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
        >
          <Hero />
        </section>

        {/* About section with alternating background */}
        <section id="about" className="py-20 bg-white dark:bg-gray-800">
          <About />
        </section>

        {/* Skills section with subtle background */}
        <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-700">
          <Skills />
        </section>

        {/* Projects section with hover animations */}
        <section id="projects" className="py-20 bg-white dark:bg-gray-800">
          <Projects />
        </section>

        {/* Contact section with gradient background */}
        <section
          id="contact"
          className="py-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white"
        >
          <Contact />
        </section>
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
