import React from "react";
import ProjectCard from "./ProjectCard";
import MotionWrapper from "./MotionWrapper";
import movieApp from "../assets/movie-finder.jpeg";
import recipeApp from "../assets/recipe-finder.jpeg";
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
    title: "Movie Finder App",
    description:
      "Search movies with OMDB API, responsive UI, loader, and no-results message.",
    tech: ["React", "Tailwind", "Vite", "OMDB API"],
    live: "https://movie-finder-alpha-six.vercel.app/",
    github:
      "https://github.com/AkinsMikopee10/My_Projects/tree/main/movie-finder",
    image: movieApp,
  },
  {
    title: "Recipe App",
    description: "",
    tech: ["React", "Tailwind", "Vite", "LocalStorage"],
    live: "https://recipe-finder-app-lilac-nine.vercel.app/",
    github:
      "https://github.com/AkinsMikopee10/My_Projects/tree/main/recipe-finder-app",
    image: recipeApp,
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
      "Game Explorer is a React-based web application that allows users to discover, search, and save their favorite video games. It connects to theRAWG Video Games API to provide real-time data about thousands of games across multiple platforms.",
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
    <section id="projects" className="py-20 container mx-auto px-6">
      <MotionWrapper>
        <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </MotionWrapper>
    </section>
  );
};

export default Projects;
