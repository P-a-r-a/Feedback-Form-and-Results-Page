import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F6F2E7",
        matcha: {
          50: "#F1F5E9",
          100: "#DFEAC9",
          200: "#BFD69A",
          300: "#9CC069",
          400: "#7CA845",
          500: "#5C7A3F", // primary
          600: "#4A6432",
          700: "#374B25",
          800: "#243219",
          900: "#171F10", // deep tea
        },
        bamboo: "#A67C52",
        clay: "#C97B4A",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Inter", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      borderRadius: {
        bowl: "2rem",
      },
      keyframes: {
        ripple: {
          "0%": { transform: "scale(0.9)", opacity: "0.6" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
        steam: {
          "0%, 100%": { transform: "translateY(0) scaleX(1)", opacity: "0.35" },
          "50%": { transform: "translateY(-6px) scaleX(1.15)", opacity: "0.7" },
        },
      },
      animation: {
        ripple: "ripple 1.8s ease-out infinite",
        steam: "steam 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
