/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        diego: {
          500: "#FF6363;",
          800: "#FF1313;",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
