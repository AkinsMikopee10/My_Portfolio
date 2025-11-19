import React from "react";
import MotionWrapper from "./MotionWrapper";
import { Mail, Github, Linkedin } from "lucide-react"; // icons

/*
Contact Component
- Provides ways for recruiters or hiring managers to reach you
- Includes email, LinkedIn, GitHub
- Clean, centered layout with icons and hover animations
*/

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 container mx-auto px-6 text-center bg-gray-50 dark:bg-gray-900 transition-colors duration-300 rounded-lg"
    >
      <MotionWrapper>
        {/* Section Header */}
        <h2 className="text-4xl font-extrabold mb-6 text-gray-900 dark:text-gray-100">
          Get In Touch
        </h2>
        <p className="mb-10 max-w-xl mx-auto text-gray-700 dark:text-gray-300 leading-relaxed">
          Whether you have a project in mind, want to collaborate, or just want
          to connect, feel free to reach out. I'm open to frontend roles,
          internships, or supporting developer positions.
        </p>

        {/* Contact Options */}
        <div className="flex flex-col md:flex-row justify-center gap-6 items-center">
          {/* Email */}
          <a
            href="mailto:akinsmikopee2507@gmail.com"
            className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-500 hover:scale-105 transition-transform duration-300"
          >
            <Mail size={20} />
            Send Email
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/AkinsMikopee10"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md shadow-md hover:scale-105 hover:shadow-glow transition-transform duration-300"
          >
            <Github size={20} />
            GitHub
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/michael-akinyemi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-500 hover:scale-105 transition-transform duration-300"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
        </div>
      </MotionWrapper>
    </section>
  );
};

export default Contact;
