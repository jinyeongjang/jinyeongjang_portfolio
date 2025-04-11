/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: { max: "639px" },
        xxs: { max: "375px" },
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      spacing: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
      },
    },
  },
  plugins: [],
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = config;
} else {
  export default config;
}
