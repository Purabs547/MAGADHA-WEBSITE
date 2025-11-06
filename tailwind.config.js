/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
     extend: {
     keyframes: {
        "spin-pause": {
          "0%": { transform: "rotate(0deg)" },
          // "80%": { transform: "rotate(45deg)" }, // rotate smoothly
          "100%": { transform: "rotate(90deg)" }, // pause at end
        },
         shake: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translate(-2px, 2px)' },
          '20%, 40%, 60%, 80%': { transform: 'translate(2px, -2px)' },
        },
          glowMove: {
      "0%": { backgroundPosition: "100% 50%" },
      "50%": { backgroundPosition: "0% 80%" },
      "100%": { backgroundPosition: "100% 50%" },
    },
    glowFlow: {
      '0%': { backgroundPosition: '200% 0' },
      '100%': { backgroundPosition: '-200% 0' },
    },
     "border-flow": {
      "0%": { "background-position": "0% 50%" },
      "50%": { "background-position": "100% 50%" },
      "100%": { "background-position": "0% 50%" },
    },
      },
      animation: {
        "spin-pause": "spin-pause 6s ease-in-out infinite", // one full spin every 6s with a pause
        shake: 'shake 0.5s ease-in-out infinite',
        glow: "glowMove 1s linear infinite",
        glowFlow: 'glowFlow 4s linear infinite',
        "border-flow": "border-flow 4s ease infinite",


      },
      fontFamily: {
        samarkan: ["Samarkan", "cursive"],
        cinzel: ['"Cinzel"', 'serif'],
        helvetica: ["Helvetica", "Arial", "sans-serif"],
        instrument: ['"Instrument Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}