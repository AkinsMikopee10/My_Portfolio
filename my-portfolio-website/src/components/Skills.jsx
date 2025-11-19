import React from "react";
import SkillBadge from "./SkillBadge";
import MotionWrapper from "./MotionWrapper";
import { Code } from "lucide-react"; // icon for section header

/*
Skills Component
- Displays a grid of skills
- Uses reusable SkillBadge component
*/

const skills = [
  { name: "React", level: "Intermediate" },
  { name: "TailwindCSS", level: "Intermediate" },
  { name: "JavaScript", level: "Intermediate" },
  { name: "Vite", level: "Intermediate" },
  { name: "HTML", level: "Intermediate" },
  { name: "CSS", level: "Intermediate" },
  { name: "Git", level: "Intermediate" },
  { name: "API Integration", level: "Intermediate" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 container mx-auto px-6 text-center bg-gradient-to-r from-indigo-50 to-pink-50 
  dark:from-gray-800 dark:to-gray-900 transition-colors duration-300 rounded-lg"
    >
      <MotionWrapper>
        {/* Section Header */}
        <div className="flex items-center justify-center gap-2 mb-10">
          <Code size={28} className="text-indigo-600 dark:text-indigo-400" />
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100">
            Skills
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, idx) => (
            <SkillBadge key={idx} name={skill.name} level={skill.level} />
          ))}
        </div>
      </MotionWrapper>
    </section>
  );
};

export default Skills;
