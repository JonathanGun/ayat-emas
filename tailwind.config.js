/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      fontFamily: {
        cursive: ["cursive"],
      },
      colors: {
        "theme-bg": "#0a4b51",
      },
    },
  },
  plugins: [],
};
