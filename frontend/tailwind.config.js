/** @type {import('tailwindcss').Config} */

const yellowGreen = "#98ce00ff";
const gunMetal = "#022b3aff";
const teal = "#1f7a8cff";

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        "yellow-green": {
          50: "#fcffe4",
          100: "#f6ffc5",
          200: "#ebff92",
          300: "#daff53",
          400: "#c5fb20",
          500: "#98ce00",
          600: "#80b500",
          700: "#618902",
          800: "#4d6c08",
          900: "#425b0c",
          950: "#213300",
        },

        teal: {
          50: "#eefdfd",
          100: "#d4f8f9",
          200: "#afeef2",
          300: "#77e1e9",
          400: "#39cad7",
          500: "#1daebd",
          600: "#1b8c9f",
          700: "#1f7a8c",
          800: "#205c6a",
          900: "#1f4d5a",
          950: "#0f323d",
        },

        gunMetal: {
          50: "#eaffff",
          100: "#cbffff",
          200: "#9dfbff",
          300: "#5af5ff",
          400: "#0fe5ff",
          500: "#00c7e7",
          600: "#009dc1",
          700: "#027d9c",
          800: "#0c657e",
          900: "#0f526a",
          950: "#022b3a",
        },
      },

      fontFamily: {
        "main-font": ["AR One Sans", "sans-serif"],
      },
      fontSize: {
        mataille: "14px",
        mataille: "14px",
        mataille: "14px",
        mataille: "14px",
        "--font-size-h1": "40px",
        "--font-size-h1-rem": "2.5rem",
        "--font-size-h2": "32px",
        "--font-size-h2-rem": "2rem",
        "--font-size-h3": "24px",
        "--font-size-h3-rem": "1.5rem",
        "--font-size-h4": "16px",
        "--font-size-h4-rem": "1rem",
        "--font-size-h5": "8px",
        "--font-size-h5-rem": "0.5rem",
      },
      "font-size": {},
      /*      sans: ["Graphik", "sans-serif"],
        serif: ["Merriweather", "serif"], */
    },

    spacing: {
      "8xl": "96rem",
      "9xl": "128rem",
    },

    borderRadius: {
      "4xl": "2rem",
    },
  },
};
/* plugins: [require("flowbite/plugin")],
}; */
