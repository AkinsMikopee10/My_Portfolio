import React from "react";
import SkillBadge from "./SkillBadge";

/*
Skills Component
- Displays a list/grid of skills
- Uses reusable SkillBadge component
*/

const skills = [
  "React",
  "TailwindCSS",
  "JavaScript",
  "Vite",
  "HTML",
  "CSS",
  "Git",
  "API Integration",
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 container mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold mb-10">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, idx) => (
          <SkillBadge key={idx} name={skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
