/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      mobile: "375px",
      desktop: "1440px",
    },
    colors:
      // - Dark Blue (Dark Mode Elements): hsl(209, 23%, 22%)
      // - Very Dark Blue (Dark Mode Background): hsl(207, 26%, 17%)
      // - Very Dark Blue (Light Mode Text): hsl(200, 15%, 8%)
      // - Dark Gray (Light Mode Input): hsl(0, 0%, 52%)
      // - Very Light Gray (Light Mode Background): hsl(0, 0%, 98%)
      // - White (Dark Mode Text & Light Mode Elements): hsl(0, 0%, 100%)

      {
        darkBlue: "#2b3945",
        veryDarkBlue: "#202c37",
        lightVeryDarkBlue: "#111517",
        darkGray: "#858585",
        veryLightGray: "#fafafa",
        white: "#ffffff",
        black: "#000000",
      },
    fontFamily: {
      display: ["Nunito Sans", "sans-serif"],
    },
    extend: {
      //   page: {
      //     homepage:
      //     '14': '14px'
      //     detailpage:
      //     '16': '16px'
      //   }
      // }
    },
    plugins: [],
  },
};
