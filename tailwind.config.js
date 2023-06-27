/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xl: { min: "1279px" },
        // => @media (min-width: 1279px) { ... }

        lg: { min: "1023px" },
        // => @media (max-width: 1023px) { ... }

        md: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        sm: { max: "639px" },
        // => @media (max-width: 639px) { ... }
      },
      animation: {
        typing:
          "type 1s steps(var(--steps-character), end) forwards var(--animation-delay)",
      },
      keyframes: {
        type: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        openSans: ["Open Sans", "sans-serif"],
        montserrat: ["Montserrat Alternates", "sans-serif"],
        moirai: ["Moirai One", "cursive"],
        gasoek: ["Gasoek One", "sans-serif"],
        lilita: ["Lilita One", "cursive"],
      },
    },
  },
  plugins: [],
};
