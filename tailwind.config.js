/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: 'class', 
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans],
      },
      
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
      },
      animation:{
        'spin-slow': 'spin 8s linear infinite',
      },
      backgroundImage:{
        circularLight: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px , #f5f5f5 100px);'
      }
    },
  },
  plugins: [
      require('@tailwindcss/custom-forms'),
    

  ],
};
