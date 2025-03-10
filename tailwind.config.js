/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        audioWide: ["Audiowide", "cursive"],
        calibri: ["Calibri", "sans-serif"],
        josefin: ["Josefin Sans", "sans-serif"],
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' }
        },
        'planet-1': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(20px)' }
        },
        'planet-2': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-20px)' }
        },
        'twinkle': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' }
        },
        'bounceInfinite': {
          '0%' : {
            transform: 'translateY(0)',
            opacity: 1
          },
          '10%': {
            transform: 'translateY(-150px)',
            opacity: 1
          },
          '40%': {
            transform: 'translateY(0)',
            opacity: 1
          },
          '50%': {
            transform: 'translateY(-150px)',
            opacity: 1
          },
          '80%': {
            transform: 'translateY(0)',
            opacity: 1
          },
          '100%': {
            transform: 'translateY(0) rotate(360deg) scale(8.2)',
            opacity: 0
          } 
        }
      },
      animation: {
        'gradient-shift': 'gradient-shift 15s ease infinite',
        'planet-1': 'planet-1 5s ease-in-out infinite',
        'planet-2': 'planet-2 7s ease-in-out infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        bounceInfinite: "bounceInfinite 2.5s infinite",
      }
    }
  },
  plugins: [],
}