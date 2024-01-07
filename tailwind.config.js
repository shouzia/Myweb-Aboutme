/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      md: "768px",
      lg: "1300px",
    },
    extend: {
      animation: {
        ImgMove: "ImgMove 5s infinite",
      },
      keyframes: {
        ImgMove: {
          "0%": { transform: "scale(1.0) translateX(0%)" },
          "50%": { transform: " scale(1.02) translateX(-0.1%)" },
          "100%": { transform: " scale(1) translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};
