import React from "react";
import { ArrowDownRight, FileText } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center border-b border-portfolio-border bg-portfolio-surface px-6 pt-24 dark:border-portfolio-dark-border dark:bg-portfolio-dark-surface"
    >
      <div className="mx-auto w-full max-w-6xl py-20 md:py-28">
        {/* Intro Label */}
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.18em] text-portfolio-accent">
          Frontend Developer
        </p>

        {/* Main Heading */}
        <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight text-portfolio-text dark:text-portfolio-dark-text md:text-7xl lg:text-8xl">
          I build interfaces that are clear, responsive, and built to work.
        </h1>

        {/* Supporting Content */}
        <div className="mt-8 grid max-w-4xl gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <p className="max-w-2xl text-lg leading-8 text-portfolio-muted dark:text-portfolio-dark-muted md:text-xl">
            I'm Michael Akinyemi, a frontend developer focused on turning
            designs and ideas into thoughtful web experiences using modern
            frontend technologies.
          </p>

          <div className="hidden md:block">
            <ArrowDownRight
              size={42}
              strokeWidth={1.5}
              className="text-portfolio-accent dark:text-portfolio-dark-accent"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 border border-portfolio-text bg-portfolio-text px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:border-portfolio-accent hover:bg-portfolio-accent dark:border-portfolio-dark-text dark:bg-portfolio-dark-text dark:text-portfolio-dark-surface dark:hover:border-portfolio-dark-accent dark:hover:bg-portfolio-dark-accent"
          >
            View Projects
            <ArrowDownRight size={17} aria-hidden="true" />
          </a>

          <a
            href="/Michael_Akinyemi_CV_2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-portfolio-border px-6 py-3 text-sm font-medium text-portfolio-text transition-colors duration-200 hover:border-portfolio-accent hover:text-portfolio-accent dark:border-portfolio-dark-border dark:text-portfolio-dark-text dark:hover:border-portfolio-dark-accent dark:hover:text-portfolio-dark-accent"
          >
            View Resume
            <FileText size={17} aria-hidden="true" />
          </a>
        </div>

        {/* Stack */}
        <div className="mt-16 border-t border-portfolio-border pt-5 dark:border-portfolio-dark-border">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-portfolio-muted dark:text-portfolio-dark-muted">
            Working with
          </p>

          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-portfolio-text dark:text-portfolio-dark-text">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Tailwind CSS</span>
            <span>Git & GitHub</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
