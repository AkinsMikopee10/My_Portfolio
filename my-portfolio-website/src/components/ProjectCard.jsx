import React from "react";
import { ExternalLink, Github } from "lucide-react"; // icons for buttons

const ProjectCard = ({ title, description, tech, live, github, image }) => {
  return (
    <div className="backdrop-blur-lg bg-white/70 dark:bg-gray-800/70 rounded-xl shadow-lg p-5 flex flex-col hover:shadow-glow hover:-translate-y-1 transition-transform duration-300">
      {/* Project Image */}
      <div className="overflow-hidden rounded-md mb-4">
        <img
          src={image}
          alt={title}
          className="object-cover h-48 w-full rounded-md transform hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
        {title}
      </h3>

      {/* Description */}
      <p className="mb-3 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
        {description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t, idx) => (
          <span
            key={idx}
            className="bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 px-2 py-1 rounded-full text-xs font-medium"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mt-auto">
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white bg-indigo-600 px-4 py-2 rounded-md shadow-md hover:bg-indigo-500 hover:scale-105 transition-transform duration-300"
        >
          <ExternalLink size={16} />
          Live
        </a>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 border border-indigo-600 dark:border-indigo-400 px-4 py-2 rounded-md hover:bg-indigo-50 dark:hover:bg-gray-700 transition-colors duration-300"
        >
          <Github size={16} />
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
