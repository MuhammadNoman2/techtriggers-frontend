/** @type {import('tailwindcss').Config} */
// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // ✅ must include jsx/tsx
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

