/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        swirl: "url('/swirl_t1.png')",
        about: "url('/about-background.png')",
        aboutCloud:
          "url('https://res.cloudinary.com/dayropo/image/upload/v1650049471/about-background_zhkq9b.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
