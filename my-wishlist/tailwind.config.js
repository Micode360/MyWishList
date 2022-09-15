/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'wish-blue': '#1f4e79',
        'wish-orange': '#c85c11',
        'wish-gray': '#444444',
        'wish-white-200': '#f2f2f2',
        'wish-white-400': '#ffffff'
      },
    },
  },
  plugins: [],
}