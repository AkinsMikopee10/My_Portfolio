import React from "react";
import ProjectCard from "./ProjectCard";
import MotionWrapper from "./MotionWrapper";
import { FolderGit2 } from "lucide-react"; // section icon
import movieApp from "../assets/CineScope.jpeg";
import flowtrack from "../assets/FlowTrack.jpeg";
import weatherApp from "../assets/weather-app.jpeg";
import gameExplorer from "../assets/game-explorer.jpeg";
import zenspace from "../assets/zenspace.jpeg";

/*
Projects Component
- Maps through array of project objects
- Uses ProjectCard component for display
- Responsive grid layout with Tailwind
*/

const projects = [
  {
    title: "CineScope",
    description:
      "CineScope is a modern movie discovery app built with React and Vite. It connects to the TMDB API to let users search, explore, and save their favorite films. The goal was to create an app that feels like a real product: fast, polished, and enjoyable to use",
    tech: [
      "React",
      "TailwindCSS",
      "Framer Motion",
      "Vite",
      "TMDB REST API",
      "localStorage",
    ],
    live: "https://cinescope-movies-iota.vercel.app/",
    github:
      "https://github.com/AkinsMikopee10/My_Projects/tree/main/movie-finder",
    image: movieApp,
  },
  {
    title: "FlowTrack",
    description:
      "This is a landing page for a tool that is designed to help you stay focused, organized, and consistent. With a clean interface, intuitive tools, and a distraction-free dashboard, you can spend less time managing tasks and more time doing meaningful work.",
    tech: ["React", "Tailwind", "Vite", "Framer Motion"],
    live: "https://flowtrack-phi.vercel.app/",
    github:
      "https://github.com/AkinsMikopee10/My_Projects/tree/main/flowtrack-landing",
    image: flowtrack,
  },
  {
    title: "Weather App",
    description:
      "Search any city to view real-time weather, temperature, and conditions using OpenWeatherMap API.",
    tech: ["React", "Tailwind", "Vite", "OpenWeatherMap API"],
    live: "https://weather-app-tau-tawny-66.vercel.app/",
    github:
      "https://github.com/AkinsMikopee10/My_Projects/tree/main/weather-app",
    image: weatherApp,
  },
  {
    title: "Game Explorer",
    description:
      "Discover, search, and save favorite video games using the RAWG API with a modern UI.",
    tech: ["React", "Tailwind", "Vite", "RAWG API"],
    live: "https://game-explorer-app-azure.vercel.app/",
    github: "https://github.com/AkinsMikopee10/alx-fe-capstone-project",
    image: gameExplorer,
  },
  {
    title: "ZenSpace App",
    description:
      "Focus and wellness app with Breathing Timer, Mood Tracker, Reflection Cards, and stats.",
    tech: ["React", "Tailwind", "Vite", "Framer Motion"],
    live: "https://zenspace-smoky.vercel.app/",
    github:
      "https://github.com/AkinsMikopee10/My-Portfolio-Projects/tree/main/zenspace",
    image: zenspace,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 container mx-auto px-6 bg-gradient-to-b from-gray-100 via-white to-blue-50 
  dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 rounded-lg"
    >
      <MotionWrapper>
        {/* Section Header */}
        <div className="flex items-center justify-center gap-2 mb-10">
          <FolderGit2
            size={28}
            className="text-indigo-600 dark:text-indigo-400"
          />
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100">
            Projects
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </MotionWrapper>
    </section>
  );
};

export default Projects;
