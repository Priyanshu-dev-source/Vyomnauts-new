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

        'bounceInfiniteFrame': {
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
        },
        'moveLeft' : {
          '0%':{
              transform: "translateX(0px) translateY(0px) rotate(180deg) scale(0.8)",
              opacity : "1"
          },
          '100%':{
              transform: "translateX(-490px) translateY(300px) rotate(360deg) scale(0.1)",
              opacity: "0"    
          }
        },
        'moveRight' : {
          '0%':{
              transform: "translateX(0px) translateY(0px) rotate(180deg) scale(0.8)",
              opacity : "1"
          },
          '100%':{
              transform: "translateX(490px) translateY(300px) rotate(360deg) scale(0.1)",
              opacity: "0"    
          }
        },
        'moveHeadUp' : {
          '0%' : {
              transform : "translateY(0px) scale(0.8)",
              opacity : "1"
          },
          '100%' : {
            transform : "translateY(-90px) scale(0.7)",
            opacity : "0"
          }
        },
        'moveHeadDown' : {
          '0%' : {
              transform : "translateY(0px) scale(0.8)",
              opacity : "1"
          },
          '100%' : {
            transform : "translateY(90px) scale(0.7)",
            opacity : "0"
          }
        },
        'boxPopUp' : {
          '0%' : {
            transform : "scale(0.2)",
            opacity : "0"
          },
          '100%' : {
            transform : "scale(1)",
            opacity : "1"
          }
        }
      },
      animation: {
        'gradient-shift': 'gradient-shift 15s ease infinite',
        'planet-1': 'planet-1 5s ease-in-out infinite',
        'planet-2': 'planet-2 7s ease-in-out infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'bounceInfinite': "bounceInfiniteFrame 2s infinite",
        'boxPopUp': "boxPopUp 1s linear forwards",
        moveLeft : "moveLeft 0.5s linear forwards",
        moveRight : "moveRight 0.5s linear forwards",
        moveHeadUp : "moveHeadUp 0.5s linear forwards",
        moveHeadDown : "moveHeadDown 0.5s linear forwards",
       

      }
    }
  },
  plugins: [],
}