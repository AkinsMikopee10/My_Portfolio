import React from "react";
import { ArrowUpRight, Github } from "lucide-react"; // icons for buttons

const ProjectCard = ({
  title,
  description,
  focus,
  tech,
  live,
  github,
  image,
  number,
  featured = false,
}) => {
  return (
    <article
      className={`group flex flex-col border border-portfolio-border bg-white dark:border-portfolio-dark-border dark:bg-portfolio-dark-neutral ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      {/* Project Image */}
      <div className="overflow-hidden border-b border-portfolio-border dark:border-portfolio-dark-border">
        <img
          src={image}
          alt={title}
          className={`w-full object-cover transition-transform duration-500 group-hover:scale-[1.02] ${
            featured ? "h-72 md:h-96" : "h-56"
          }`}
        />
      </div>

      {/* Project Content */}
      <div className="flex flex-1 flex-col p-6 md:p-7">
        {/* Project Number */}
        <div className="mb-6 flex items-center justify-between">
          <span className="text-xs font-medium tracking-[0.16em] text-portfolio-muted dark:text-portfolio-dark-muted">
            {number}
          </span>

          {featured && (
            <span className="text-xs font-medium uppercase tracking-[0.14em] text-portfolio-accent dark:text-portfolio-dark-accent">
              Featured
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-2xl font-semibold tracking-tight text-portfolio-text dark:text-portfolio-dark-text">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-4 max-w-2xl text-sm leading-7 text-portfolio-muted dark:text-portfolio-dark-muted md:text-base">
          {description}
        </p>

        {/* Focus */}
        <div className="mt-5 border-l-2 border-portfolio-accent pl-4 dark:border-portfolio-dark-accent">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-portfolio-accent dark:text-portfolio-dark-accent">
            What I built
          </p>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-portfolio-muted dark:text-portfolio-dark-muted">
            {focus}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 border-t border-portfolio-border pt-5 dark:border-portfolio-dark-border">
          {tech.map((item) => (
            <span
              key={item}
              className="text-xs font-medium text-portfolio-text dark:text-portfolio-dark-text"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-portfolio-text bg-portfolio-text px-5 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:border-portfolio-accent hover:bg-portfolio-accent dark:border-portfolio-dark-text dark:bg-portfolio-dark-text dark:text-portfolio-dark-surface dark:hover:border-portfolio-dark-accent dark:hover:bg-portfolio-dark-accent"
          >
            Live site
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-portfolio-border px-5 py-2.5 text-sm font-medium text-portfolio-text transition-colors duration-200 hover:border-portfolio-accent hover:text-portfolio-accent dark:border-portfolio-dark-border dark:text-portfolio-dark-text dark:hover:border-portfolio-dark-accent dark:hover:text-portfolio-dark-accent"
          >
            GitHub
            <Github size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
