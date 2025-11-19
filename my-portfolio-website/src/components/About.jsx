import React from "react";
import profilePic from "../assets/profile.jpeg";
import MotionWrapper from "./MotionWrapper";
import { FileText } from "lucide-react"; // resume icon

const About = () => {
  return (
    <section
      id="about"
      className="py-20 container mx-auto px-6 flex flex-col md:flex-row items-center gap-12"
    >
      <MotionWrapper>
        {/* Profile Image */}
        <div className="md:w-1/3 flex justify-center md:justify-start">
          <img
            src={profilePic}
            alt="Michael Akinyemi"
            className="rounded-full shadow-lg w-64 h-64 object-cover ring-4 ring-indigo-500 hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Bio Text */}
        <div className="md:w-2/3 text-center md:text-left">
          <h2 className="text-4xl font-extrabold mb-6 text-gray-900 dark:text-gray-100">
            About Me
          </h2>
          <p className="mb-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I’m a frontend developer passionate about building modern,
            responsive web applications using React and TailwindCSS. I enjoy
            creating clean UI, smooth UX, and efficient, maintainable code.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            My goal is to contribute to impactful projects, continuously learn,
            and deliver value through creative solutions.
          </p>

          {/* CTA Button */}
          <a
            href="/public/Michael_Akinyemi_CV_2025.pdf" // replace with actual resume or LinkedIn link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-500 hover:scale-105 transition-transform duration-300"
          >
            <FileText size={20} />
            View Resume
          </a>
        </div>
      </MotionWrapper>
    </section>
  );
};

export default About;
