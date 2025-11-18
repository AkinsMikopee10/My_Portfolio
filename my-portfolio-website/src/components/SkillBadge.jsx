import React from "react";

/*
SkillBadge Component
- Reusable component for displaying a skill
- Accepts a 'name' prop
- Styled with Tailwind colors
*/
const SkillBadge = ({ name }) => {
  return (
    <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
      {name}
    </span>
  );
};

export default SkillBadge;
