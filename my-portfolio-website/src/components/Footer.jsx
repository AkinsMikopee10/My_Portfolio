import React from "react";
import { Github, Linkedin, Mail } from "lucide-react"; // icons

/*
Footer Component
- Shows copyright and quick navigation links
- Includes social icons
- Dark mode + responsive layout
*/

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t mt-20 py-8 transition-colors duration-300">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Copyright */}
        <p className="text-gray-600 dark:text-gray-400 text-sm text-center md:text-left">
          © {new Date().getFullYear()} Michael Akinyemi. All Rights Reserved.
        </p>

        {/* Quick Navigation */}
        <ul className="flex gap-6 text-sm font-medium text-gray-700 dark:text-gray-300">
          <li>
            <a
              href="#about"
              className="hover:text-indigo-500 dark:hover:text-indigo-400 transition"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="hover:text-indigo-500 dark:hover:text-indigo-400 transition"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-indigo-500 dark:hover:text-indigo-400 transition"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-indigo-500 dark:hover:text-indigo-400 transition"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a
            href="mailto:akinsmikopee2507@gmail.com"
            className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
          <a
            href="https://github.com/AkinsMikopee10"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/michael-akinyemi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
