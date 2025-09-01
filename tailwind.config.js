/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        myanmar: ["'Noto Sans Myanmar'", "sans-serif"],
      },
    },
  },
  plugins: [],
}
