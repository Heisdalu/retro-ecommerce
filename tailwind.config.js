/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      md: "768px",
      lg: "1024px",
      vlg: "1300px",
    },
    backgroundColor: {
      white: "#fff",
      black: "#000000",
      gray: "rgb(126, 111, 93)",
      sb: "#160B08",
      lg: "#020A0F",
      mg: "#ffffff0d",
      re: "#ffffff26",
    },
    fontFamily: {
      Inter: ["Inter, sans-serif"],
    },
    width: {
      100: "100%",
      slide: "770px",
    },
    fontWeight: {
      400: "400",
      500: "500",
      700: "700",
    },
    fontSize: {
      0.75: "0.75rem",
      0.875: "0.875rem",
      1: "1rem",
      1.5: "1.5rem",
      2: "2rem",
    },
    spacing: {
      0.5: "0.5rem",
      1: "1rem",
      1.5: "1.5rem",
      2: "2rem",
      12: "12px",
      11: "11px",
    },
    borderColor: {
      bc1: "#CCCCCC",
      bc2: "#0000001e",
    },
    borderWidth: {
      1: "1px",
    },
    borderRadius: {
      rxl: "4px 0px 0px 4px",
      rx2: "0px 4px 4px 0px;",
      rx3: "200px 200px 200px",
    },
    boxShadow: {
      bx1: "inset 0px 1px 1px #00000013",
    },
    extend: {
      colors: {
        lb: "#ffffffbf",
        red: "#ff0000",
      },
    },
  },
  plugins: [],
};
