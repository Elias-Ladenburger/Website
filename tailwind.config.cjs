const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{svelte,html,js}"],
  theme: {
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
      checkmark: 'checkmark',
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
    colors: {
      primary: colors.white, 
      primaryContrast: "#21395e",
      primaryGradient1: "00344b",
      primaryGradient2: "#002b32",
      primaryGradient3: "#00211a",
      primaryGradient4: "#011601",

      emphasis: "#C98D26",
      secondary: "",
      secondaryContrast: "",
		  blueMidnight: "#191970",
		  blueNavy: "#000080",
		  blueBlack: "#161633",
		  desertSun: "#C98D26",
      blueRoyal: "#4169e1",
      blueGrey: "#6699CC",
      blueGrotto: "#0476D0",
      blueBaby: "#89CFF0",
		  black: colors.black,
      white: colors.white,
    },
    fontFamily: {
      sans: ["Helvetica"],
      serif: []
    }
  },
  plugins: [],
}
