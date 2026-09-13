import React from "react";
import profilePic from "../assets/Profile Picture.png";

const About = () => {
  return (
    <section
      id="about"
      className="border-b border-portfolio-border bg-portfolio-surface px-6 py-24 dark:border-portfolio-dark-border dark:bg-portfolio-dark-surface md:py-32"
    >
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
        {/* Profile Image */}
        <div className="flex items-start">
          <img
            src={profilePic}
            alt="Michael Akinyemi"
            className="h-64 w-64 rounded-full object-cover object-top md:h-72 md:w-72"
          />
        </div>

        {/* About Content */}
        <div>
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.18em] text-portfolio-accent dark:text-portfolio-dark-accent">
            About Me
          </p>

          <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-portfolio-text dark:text-portfolio-dark-text md:text-5xl">
            Building thoughtful interfaces with a focus on clarity and
            usability.
          </h2>

          <div className="mt-8 max-w-2xl space-y-5 text-base leading-8 text-portfolio-muted dark:text-portfolio-dark-muted md:text-lg">
            <p>
              I'm a frontend developer who enjoys turning ideas and designs into
              responsive, accessible web interfaces. I work primarily with HTML,
              CSS, JavaScript, React, and Tailwind CSS.
            </p>

            <p>
              I care about writing code that is understandable and maintainable,
              while paying attention to the details that make an interface feel
              natural to use across different screen sizes.
            </p>

            <p>
              I'm continuing to grow as a developer by building real projects,
              learning modern frontend practices, and improving how I approach
              problems from both a technical and user perspective.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
