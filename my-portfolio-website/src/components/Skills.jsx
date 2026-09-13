import React from "react";
import SkillBadge from "./SkillBadge";

/*
Skills Component
- Displays a grid of skills
- Uses reusable SkillBadge component
*/

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Vite",
  "Node.js",
  "Express",
  "MongoDB",
  "Git & GitHub",
  "Framer Motion",
  "API Integration",
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="border-b border-portfolio-border bg-portfolio-surface px-6 py-24 dark:border-portfolio-dark-border dark:bg-portfolio-dark-surface md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="grid gap-6 border-b border-portfolio-border pb-8 dark:border-portfolio-dark-border md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-portfolio-accent dark:text-portfolio-dark-accent">
              Tools & Technologies
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-portfolio-text dark:text-portfolio-dark-text md:text-5xl">
              Skills
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-portfolio-muted dark:text-portfolio-dark-muted md:text-lg">
            Technologies I use to build responsive interfaces, connect
            applications to APIs, and develop full-stack projects.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="mt-10 grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <SkillBadge key={skill} name={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
