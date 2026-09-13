import React from "react";

const SkillBadge = ({ name }) => {
  return (
    <div className="border-b border-portfolio-border py-4 dark:border-portfolio-dark-border">
      {/* Skill Name */}
      <span className="text-base font-medium text-portfolio-text dark:text-portfolio-dark-text">
        {name}
      </span>
    </div>
  );
};

export default SkillBadge;
