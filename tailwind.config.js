/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundColor: {
      white: "#fff",
      black: "#000000;",
    },
    fontFamily: {
      Inter: ["Inter, sans-serif"],
    },
    fontWeight: {
      400: "400",
      500: "500",
    },
    fontSize: {
      0.75: "0.75rem",
      0.875: "0.875rem",
      1: "1rem",
    },
    extend: {},
  },
  plugins: [],
};
