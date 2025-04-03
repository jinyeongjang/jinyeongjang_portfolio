/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = config;
} else {
  export default config;
}
