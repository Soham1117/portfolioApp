import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 20s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      colors: {
        "midnight-blue": "#1a1048",
        black: "#000000",
        "midnight-pink": "#401048",
        customGradientStart: "rgba(223, 154, 255, 0.32)",
        customGradientEnd: "rgba(223, 154, 255, 0.14)",
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(circle at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        poppins: ['"Poppins"', "sans-serif"],
        dmserif: ['"DM Serif Display"', "serif"],
        custom: ["hero", "sans-serif"],
        spacemono: ["Space Mono", "monospace"],
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".bg-gradient-radial": {
          backgroundImage:
            "radial-gradient(circle at 50% 50%, var(--tw-gradient-stops))",
        },
      });
    }),
  ],
};
