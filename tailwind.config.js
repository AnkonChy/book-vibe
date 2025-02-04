/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "banner-bg": "url('/assets/book.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
};
