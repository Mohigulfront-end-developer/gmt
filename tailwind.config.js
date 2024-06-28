/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    container: {
      padding: {
        DEFAULT: "xl",
        sm: "375px",
        md: "768px",
        lg: "1200px",
        xl: "1400px",
      },
    },
  },
  plugins: [],
};
