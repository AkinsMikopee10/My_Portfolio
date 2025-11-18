import React from "react";
import profilePic from "../assets/profile.jpeg";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 container mx-auto px-6 flex flex-col md:flex-row items-center gap-10"
    >
      {/* Profile Image */}
      <div className="md:w-1/3">
        <img
          src={profilePic}
          alt="Michael Akinyemi"
          className="rounded-full shadow-lg w-64 h-64 object-cover mx-auto md:mx-0"
        />
      </div>

      {/* Bio Text */}
      <div className="md:w-2/3 text-center md:text-left">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="mb-4">
          I’m a frontend developer passionate about building modern, responsive
          web applications using React and TailwindCSS. I enjoy creating clean
          UI, smooth UX, and efficient, maintainable code.
        </p>
        <p>
          My goal is to contribute to impactful projects, continuously learn,
          and deliver value through creative solutions.
        </p>
      </div>
    </section>
  );
};

export default About;
