/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        orange: "#FF6F3C", // Orange farve som du ønsker
        darkblue: "#013755", //mørkeblå
        lightblue: "#e6f6ff" /* Lyseblå */,
        white: "#ffffff" /* Hvid */,
      },
      keyframes: {
        bobble: {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-10px) scale(1.1)" },
        },
      },
      animation: {
        bobble: "bobble 1.5s ease-in-out infinite",
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
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/container-queries")],
};
