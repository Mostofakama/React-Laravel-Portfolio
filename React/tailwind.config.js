/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "dynamic-border-spin": "dynamic-border-spin 6s linear infinite",
        "pulse-glow": "pulse-glow 2s infinite ease-in-out",
        "fade-in-text": "fadeIn 2s ease-in-out",
        "gradient-bg": "gradientAnimation 15s ease infinite",
      },
      keyframes: {
        "dynamic-border-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: 0.6, transform: "scale(1)" },
          "50%": { opacity: 1, transform: "scale(1.05)" },
        },
        "fadeIn": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "gradientAnimation": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
    },
  },
  plugins: [],
};
