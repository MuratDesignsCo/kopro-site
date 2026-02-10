/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/content/**/*.html"
  ],
  theme: {
    extend: {}
  },
  corePlugins: {
    preflight: false
  },
  plugins: []
};
