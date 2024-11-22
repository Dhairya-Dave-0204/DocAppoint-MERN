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
        Parkinsans: ["Parkinsans", "sans-serif"],
      },

      colors: {
        primary: "#00abc1",
        secondary: "#00777c",
        tertiary: "#90e0ef",
        ternary: "#caf0f8",
        ternaryDark: "#03045e",
      },

      textColor: {
        "hover-primary": "#00abc1",
        "hover-secondary": "#00777c ",
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

