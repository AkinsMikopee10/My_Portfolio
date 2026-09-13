import React from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="border-b border-portfolio-border bg-portfolio-surface px-6 py-24 dark:border-portfolio-dark-border dark:bg-portfolio-dark-surface md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="grid gap-10 border-b border-portfolio-border pb-10 dark:border-portfolio-dark-border md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-portfolio-accent dark:text-portfolio-dark-accent">
              Let's Connect
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-portfolio-text dark:text-portfolio-dark-text md:text-6xl">
              Get in touch.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-portfolio-muted dark:text-portfolio-dark-muted md:text-lg">
            I'm open to frontend opportunities, collaborations, and interesting
            projects. If you have something in mind, feel free to reach out.
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid gap-12 pt-10 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
          {/* Contact Details */}
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-portfolio-muted dark:text-portfolio-dark-muted">
              Contact
            </p>

            <div className="mt-6 space-y-5">
              <a
                href="mailto:akinsmikopee2507@gmail.com"
                className="flex items-center gap-3 text-base font-medium text-portfolio-text transition-colors duration-200 hover:text-portfolio-accent dark:text-portfolio-dark-text dark:hover:text-portfolio-dark-accent"
              >
                <Mail size={18} aria-hidden="true" />
                akinsmikopee2507@gmail.com
              </a>

              <a
                href="https://github.com/AkinsMikopee10"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-base font-medium text-portfolio-text transition-colors duration-200 hover:text-portfolio-accent dark:text-portfolio-dark-text dark:hover:text-portfolio-dark-accent"
              >
                <Github size={18} aria-hidden="true" />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/michael-akinyemi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-base font-medium text-portfolio-text transition-colors duration-200 hover:text-portfolio-accent dark:text-portfolio-dark-text dark:hover:text-portfolio-dark-accent"
              >
                <Linkedin size={18} aria-hidden="true" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form
            action="https://formspree.io/f/xanvoddk"
            method="POST"
            className="space-y-7"
          >
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-portfolio-text dark:text-portfolio-dark-text"
              >
                Name
              </label>

              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full border border-portfolio-border bg-transparent px-4 py-3 text-sm text-portfolio-text outline-none transition-colors duration-200 placeholder:text-portfolio-muted focus:border-portfolio-accent dark:border-portfolio-dark-border dark:text-portfolio-dark-text dark:placeholder:text-portfolio-dark-muted dark:focus:border-portfolio-dark-accent"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-portfolio-text dark:text-portfolio-dark-text"
              >
                Email
              </label>

              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full border border-portfolio-border bg-transparent px-4 py-3 text-sm text-portfolio-text outline-none transition-colors duration-200 placeholder:text-portfolio-muted focus:border-portfolio-accent dark:border-portfolio-dark-border dark:text-portfolio-dark-text dark:placeholder:text-portfolio-dark-muted dark:focus:border-portfolio-dark-accent"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-portfolio-text dark:text-portfolio-dark-text"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="6"
                required
                className="w-full resize-y border border-portfolio-border bg-transparent px-4 py-3 text-sm text-portfolio-text outline-none transition-colors duration-200 placeholder:text-portfolio-muted focus:border-portfolio-accent dark:border-portfolio-dark-border dark:text-portfolio-dark-text dark:placeholder:text-portfolio-dark-muted dark:focus:border-portfolio-dark-accent"
              ></textarea>
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 border border-portfolio-text bg-portfolio-text px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:border-portfolio-accent hover:bg-portfolio-accent dark:border-portfolio-dark-text dark:bg-portfolio-dark-text dark:text-portfolio-dark-surface dark:hover:border-portfolio-dark-accent dark:hover:bg-portfolio-dark-accent"
            >
              Send Message
              <Send size={16} aria-hidden="true" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
