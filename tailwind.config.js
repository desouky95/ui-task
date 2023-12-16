/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        DEFAULT: "1px",
        1: "1px",
      },
      borderRadius: {
        36: "26px",
      },
      colors: {
        primary: { 100: "#F7F7FB", 500: "#4040F2" },
      },
      
    },
  },

  plugins: [],
};
