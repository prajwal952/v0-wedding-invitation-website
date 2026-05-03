import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-cormorant)", "Georgia", "serif"],
        serif: ["var(--font-great-vibes)", "cursive"],
      },
      colors: {
        maroon: "var(--maroon)",
        gold: "var(--gold)",
        ivory: "var(--ivory)",
        "deep-red": "var(--deep-red)",
        cream: "var(--cream)",
      },
      animation: {
        "float-petal": "float-petal 15s linear infinite",
        "float-petal-reverse": "float-petal-reverse 18s linear infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        shimmer: "shimmer 3s infinite",
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default config
