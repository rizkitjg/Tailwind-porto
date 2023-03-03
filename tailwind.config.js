/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#93032E",
        secondary: "#BDB246",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
