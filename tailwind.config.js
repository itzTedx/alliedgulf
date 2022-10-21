/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        footer: "url('/Footer.svg')",
        arrow: "('/arrow.png')",
        Questions: "('/Questions.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
