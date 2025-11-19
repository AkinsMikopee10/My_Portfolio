import React from "react";
import MotionWrapper from "./MotionWrapper";
import { Mail, Github, Linkedin, Send } from "lucide-react"; // icons

/*
Contact Component
- Provides ways for recruiters or hiring managers to reach you
- Includes email, LinkedIn, GitHub
- Contact form for direct messages
*/

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 container mx-auto px-6 text-center bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 
  dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 transition-colors duration-300 rounded-lg"
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
        <div className="flex flex-col md:flex-row justify-center gap-6 items-center mb-12">
          <a
            href="https://github.com/AkinsMikopee10"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md shadow-md hover:scale-105 hover:shadow-glow transition-transform duration-300"
          >
            <Github size={20} />
            GitHub
          </a>

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

        {/* Contact Form */}
        <form
          action="https://formspree.io/f/xanvoddk" // my Formspree endpoint
          method="POST"
          className="max-w-lg mx-auto bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 
  dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 p-8 rounded-lg shadow-md space-y-6"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-left text-gray-700 dark:text-gray-300 mb-2 font-medium"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-left text-gray-700 dark:text-gray-300 mb-2 font-medium"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-left text-gray-700 dark:text-gray-300 mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
            ></textarea>
          </div>

          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-500 hover:scale-105 transition-transform duration-300"
          >
            <Send size={20} />
            Send Message
          </button>
        </form>
      </MotionWrapper>
    </section>
  );
};

export default Contact;
