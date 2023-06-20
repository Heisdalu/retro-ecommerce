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
      cartBg: "#e4e4e5",
      mo: "#00000080",
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
      fc1: "rgb(102, 175, 233)",
      white: "#fff",
      red: "#ff0000",
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
      bx2: "rgba(0, 0, 0, 0.075) 0px 1px 1px inset",
      fx1: "rgba(0, 0, 0, 0.075) 0px 1px 1px inset, rgba(102, 175, 233, 0.6) 0px 0px 8px",
      fx2: "0px 0px 3px 0px #ff0000",
      gx1: "0px 55px 182px -28px rgba(32,33,32,0.75)",
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
