/** @type {import('tailwindcss').Config} */
import fluid, { extract } from 'fluid-tailwind'
export default {
  content: {
    files: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    extract
  },
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },

      colors: {
        primary: "#00b4d8",
        secondary: "#0077b6",
        tertiary: "#90e0ef",
        ternary: "#caf0f8",
        ternaryDark: "#03045e",
      },

      textColor: {
        "hover-primary": "#00b4d8",
        "hover-secondary": "#0077b6",
        "hover-tertiary": "#90e0ef",
        "hover-ternary": "#caf0f8",
        "hover-ternaryDark": "#03045e",
      },
    },
  },
  plugins: [
    fluid
  ],
}

