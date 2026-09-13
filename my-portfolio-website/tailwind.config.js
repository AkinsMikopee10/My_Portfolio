/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class", // enables dark mode toggle
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"], // cleaner modern font
        display: ["Inter", "system-ui", "sans-serif"], // for headings
      },

      colors: {
        portfolio: {
          surface: "#F7F6F2",
          neutral: "#ECEAE4",
          text: "#111111",
          muted: "#5F5F5A",
          border: "#D8D6CF",
          accent: "#C65D3A",
          accentDark: "#9E4327",
          accentSoft: "#E9D8D0",

          "dark-surface": "#141412",
          "dark-neutral": "#20201D",
          "dark-text": "#F4F2EC",
          "dark-muted": "#A8A69F",
          "dark-border": "#353530",
          "dark-accent": "#D87957",
          "dark-accentDark": "#E08A6B",
          "dark-accentSoft": "#382720",
        },
      },

      boxShadow: {
        subtle: "0 4px 20px rgba(17, 17, 17, 0.08)",
      },
    },
  },

  plugins: [
    require("@tailwindcss/forms"), // better form styling
    require("@tailwindcss/typography"), // prose classes for About/Projects
    require("@tailwindcss/aspect-ratio"), // responsive project images
  ],
};
