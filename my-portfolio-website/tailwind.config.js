/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class", // enables dark mode toggle
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"], // cleaner modern font
        display: ["Poppins", "sans-serif"], // for headings
      },
      colors: {
        brand: {
          light: "#6366F1", // indigo-500
          DEFAULT: "#4F46E5", // indigo-600
          dark: "#4338CA", // indigo-700
        },
      },
      boxShadow: {
        glow: "0 0 15px rgba(99, 102, 241, 0.6)", // subtle glowing effect
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"), // better form styling
    require("@tailwindcss/typography"), // prose classes for About/Projects
    require("@tailwindcss/aspect-ratio"), // responsive project images
  ],
};
