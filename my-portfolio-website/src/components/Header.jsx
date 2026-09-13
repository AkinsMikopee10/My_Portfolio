import React, { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

const Header = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full border-b border-portfolio-border bg-portfolio-surface/95 backdrop-blur-sm dark:border-portfolio-dark-border dark:bg-portfolio-dark-surface/95">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="#home"
          className="text-lg font-semibold tracking-tight text-portfolio-text transition-colors duration-200 dark:text-portfolio-dark-text"
        >
          Michael Akinyemi
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-portfolio-muted transition-colors duration-200 hover:text-portfolio-accent dark:text-portfolio-dark-muted dark:hover:text-portfolio-dark-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Controls */}
        <div className="flex items-center gap-3">
          {/* Dark Mode Toggle */}
          <button
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-portfolio-border text-portfolio-text transition-colors duration-200 hover:border-portfolio-accent hover:text-portfolio-accent dark:border-portfolio-dark-border dark:text-portfolio-dark-text dark:hover:border-portfolio-dark-accent dark:hover:text-portfolio-dark-accent"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Moon size={17} /> : <Sun size={17} />}
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-portfolio-border text-portfolio-text transition-colors duration-200 hover:border-portfolio-accent hover:text-portfolio-accent dark:border-portfolio-dark-border dark:text-portfolio-dark-text dark:hover:border-portfolio-dark-accent dark:hover:text-portfolio-dark-accent md:hidden"
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-portfolio-border bg-portfolio-surface dark:border-portfolio-dark-border dark:bg-portfolio-dark-surface md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block border-b border-portfolio-border py-4 text-sm font-medium text-portfolio-text transition-colors duration-200 last:border-b-0 hover:text-portfolio-accent dark:border-portfolio-dark-border dark:text-portfolio-dark-text dark:hover:text-portfolio-dark-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
