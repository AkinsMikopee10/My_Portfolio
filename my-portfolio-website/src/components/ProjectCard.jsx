import React from "react";

const ProjectCard = ({ title, description, tech, live, github, image }) => {
  return (
    <div className="backdrop-blur-lg bg-white/70 rounded-xl shadow-lg p-5 flex flex-col hover:shadow-xl transition">
      <img
        src={image}
        alt={title}
        className="rounded-md mb-4 object-cover h-48 w-full"
      />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="mb-3">{description}</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {tech.map((t, idx) => (
          <span
            key={idx}
            className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded text-sm"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-3 mt-auto">
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-indigo-600 px-3 py-1 rounded hover:bg-indigo-500 transition"
        >
          Live
        </a>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 border border-indigo-600 px-3 py-1 rounded hover:bg-indigo-50 transition"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
