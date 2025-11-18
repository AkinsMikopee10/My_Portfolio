import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-xl font-bold text-indigo-600">
          Michael Akinyemi
        </div>
        <ul className="flex gap-6">
          <li>
            <a href="#about" className="hover:text-indigo-500">
              About
            </a>
          </li>
          <li>
            <a href="#project" className="hover:text-indigo-500">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-indigo-500">
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-indigo-500">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
