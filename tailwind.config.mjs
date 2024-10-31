/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        orange: "#FF6F3C", // Orange farve som du ønsker
        darkblue: "#013755", // Mørkeblå
        lightblue: "#e6f6ff", // Lyseblå
        white: "#ffffff", // Hvid
      },
      keyframes: {
        changeColor: { // Tilføjet animation for farveskift
          "0%": { color: "#013755" }, // Mørkeblå
          "100%": { color: "#FF6F3C" }, // Orange
        },
      },
      animation: {
        changeColor: "changeColor 10s forwards", // Kører animationen én gang
      },
      width: {
        "70p": "80%",
        "22p": "35%",
        "8p": "20%",
      },
      height: {
        "70p": "80%",
        "22p": "35%",
        "8p": "20%",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
  ],
};

// animation på dora fisk
      // keyframes: {
      //   slideInLeft: {
      //     "0%": { transform: "translateX(-100%)" }, // Start uden for venstre kant
      //     "100%": { transform: "translateX(100%)" }, // Slut uden for højre kant
      //   },
      // },
      // animation: {
      //   slideInLeft: "slideInLeft 2s linear infinite", // Angiv animationens navn og timing
      // },