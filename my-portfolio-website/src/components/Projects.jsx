import React from "react";
import ProjectCard from "./ProjectCard";
import movieApp from "../assets/CineScope.jpeg";
import flowtrack from "../assets/FlowTrack.jpeg";
import weatherApp from "../assets/weather-app.jpeg";
import gameExplorer from "../assets/game-explorer.jpeg";
import zenspace from "../assets/zenspace.jpeg";
import VTU from "../assets/vtu-web-app.jpeg";

const projects = [
  {
    title: "BetaPlug",
    description:
      "A full-stack VTU billing platform built with React, Tailwind CSS, Node.js, Express, and MongoDB. It includes wallet funding, service purchases, transaction history, receipt generation, and an administrative dashboard.",
    focus:
      "Full-stack architecture, API integration, authentication, and transaction workflows.",
    tech: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Vite"],
    live: "https://vtu-web-app-gilt.vercel.app/",
    github: "https://github.com/AkinsMikopee10/My_Projects/tree/main/VTU",
    image: VTU,
  },
  {
    title: "Game Explorer",
    description:
      "A dynamic game discovery web app built with React using the RAWG API. Users can easily search, filter, and explore detailed game insights and save their favorite titles to a personal library through a sleek, responsive interface.",
    focus:
      "API integration, search and filtering, responsive UI, and local data persistence.",
    tech: ["React", "Tailwind CSS", "Vite", "RAWG API"],
    live: "https://game-explorer-app-azure.vercel.app/",
    github: "https://github.com/AkinsMikopee10/alx-fe-capstone-project",
    image: gameExplorer,
  },
  {
    title: "CineScope",
    description:
      "A modern movie discovery app built with React and Vite. It connects to the TMDB API to let users search, explore, and save their favorite films. The goal was to create an app that feels like a real product: fast, polished, and enjoyable to use",
    focus:
      "API integration, search experiences, responsive UI, and local data persistence.",
    tech: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Vite",
      "TMDB API",
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
      "A focused productivity landing page designed around helping users organize tasks and maintain consistent daily progress.",
    focus:
      "Responsive interface design, component structure, and polished frontend interactions.",
    tech: ["React", "Tailwind CSS", "Vite", "Framer Motion"],
    live: "https://flowtrack-phi.vercel.app/",
    github:
      "https://github.com/AkinsMikopee10/My_Projects/tree/main/flowtrack-landing",
    image: flowtrack,
  },
  {
    title: "Weather App",
    description:
      "A responsive weather application that uses the OpenWeatherMap API to display current weather conditions for searched locations.",
    focus:
      "API integration, responsive layouts, asynchronous data handling, and dynamic UI.",
    tech: ["React", "Tailwind CSS", "Vite", "OpenWeatherMap API"],
    live: "https://weather-app-tau-tawny-66.vercel.app/",
    github:
      "https://github.com/AkinsMikopee10/My_Projects/tree/main/weather-app",
    image: weatherApp,
  },
  {
    title: "ZenSpace",
    description:
      "A wellness and focus application featuring a breathing timer, mood tracking, reflection cards, and personal progress information.",
    focus:
      "Component-driven UI, local data persistence, interactive features, and responsive design.",
    tech: ["React", "Tailwind CSS", "Vite", "Framer Motion"],
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
      className="border-b border-portfolio-border bg-portfolio-surface px-6 py-24 dark:border-portfolio-dark-border dark:bg-portfolio-dark-surface md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="grid gap-6 border-b border-portfolio-border pb-8 dark:border-portfolio-dark-border md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-portfolio-accent dark:text-portfolio-dark-accent">
              Selected Work
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-portfolio-text dark:text-portfolio-dark-text md:text-5xl">
              Projects
            </h2>

            <p className="max-w-xl text-base leading-7 text-portfolio-muted dark:text-portfolio-dark-muted md:text-lg">
              A selection of interfaces and applications I've built while
              developing my frontend and full-stack skills.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
