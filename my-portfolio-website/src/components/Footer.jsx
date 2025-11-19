import React from "react";

/*
Footer Component
- Shows copyright and quick navigation links
- Consistent minimal Tailwind styling
*/

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-20">
      <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Michael Akinyemi. All Rights Reserved.
        </p>

        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
