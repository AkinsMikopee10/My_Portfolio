import React from "react";

/*
Contact Component
- Provides ways for recruiters or hiring managers to reach you
- Includes email, LinkedIn, GitHub
- Simple, clean, centered layout
*/

const Contact = () => {
  return (
    <section className=" py-20 container mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
      <p className="mb-8 max-w-xl mx-auto">
        Whether you have a project in mind, want to collaborate, or just want to
        connect, feel free to reach out. I'm open to frontend roles,
        internships, or supporting developer positions.
      </p>
      <div className="flex flex-col gap-4 items-center">
        {/* Email */}
        <a
          href="mailto:akinsmikopee2507@gmail.com"
          className="text-lg text-indigo-600 hover:underline"
        >
          akinsmikopee2507@gmail.com
        </a>

        {/* Social Links */}
        <div className="flex gap-6 mt-4">
          <a
            href="https://github.com/AkinsMikopee10"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/michael-akinyemi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
