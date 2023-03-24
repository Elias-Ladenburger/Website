const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{svelte,html,js}"],
  theme: {
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
      primaryContrast: "#161633",
      emphasis: "#C98D26",
      secondary: "",
      secondaryContrast: "",

      dark: "rgb(22, 22, 22)",
      light: "rgb(247, 247, 247)",
      orangeDark: "rgb(176, 80, 32)",

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
