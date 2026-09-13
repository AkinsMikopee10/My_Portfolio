import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="bg-portfolio-surface px-6 py-8 dark:bg-portfolio-dark-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 border-t border-portfolio-border pt-8 dark:border-portfolio-dark-border md:flex-row md:items-center md:justify-between">
        {/* Copyright */}
        <p className="text-sm text-portfolio-muted dark:text-portfolio-dark-muted">
          © {new Date().getFullYear()} Michael Akinyemi
        </p>

        {/* Quick Navigation */}
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-portfolio-muted transition-colors duration-200 hover:text-portfolio-accent dark:text-portfolio-dark-muted dark:hover:text-portfolio-dark-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-4">
          <a
            href="mailto:akinsmikopee2507@gmail.com"
            className="text-portfolio-muted transition-colors duration-200 hover:text-portfolio-accent dark:text-portfolio-dark-muted dark:hover:text-portfolio-dark-accent"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>

          <a
            href="https://github.com/AkinsMikopee10"
            target="_blank"
            rel="noopener noreferrer"
            className="text-portfolio-muted transition-colors duration-200 hover:text-portfolio-accent dark:text-portfolio-dark-muted dark:hover:text-portfolio-dark-accent"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/michael-akinyemi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-portfolio-muted transition-colors duration-200 hover:text-portfolio-accent dark:text-portfolio-dark-muted dark:hover:text-portfolio-dark-accent"
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
