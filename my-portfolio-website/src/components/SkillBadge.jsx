import React from "react";

/*
SkillBadge Component
- Reusable component for displaying a skill
- Accepts 'name' and optional 'level' props
- Styled with Tailwind colors + hover animations
*/
const SkillBadge = ({ name, level }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:scale-105 hover:shadow-glow transition-transform duration-300 cursor-default">
      {/* Skill Name */}
      <span>{name}</span>

      {/* Optional Level */}
      {level && (
        <span className="text-xs text-gray-600 dark:text-gray-400 mt-1">
          {level}
        </span>
      )}
    </div>
  );
};

export default SkillBadge;
