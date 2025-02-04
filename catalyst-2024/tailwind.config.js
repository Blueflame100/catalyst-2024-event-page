const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        headerStart: "#FFFBF6",
        headerEnd: "#F4D2DD",
        headerTeal: "#DCFDFB",
        headerBlue: "#07246D",
        middleGradient: '#73BEF7',
        endGradient: '#0066B3',
        textColor: "#44ABF9",
        textColorDark: '#097294',
        FAQ: '#DCFDFB'
      },
      fontFamily: {
        coco: "CocoBubble",
        bubblegum: "BubblegumSans",
      },
      fontSize: {
        navText: "1.5rem",
      },
      fontWeight: {
        header: "1000",
      },
      height: {
        navBar: "4.5rem",
      },
    },
    backgroundImage: (theme) => ({
      'custom-gradient': `linear-gradient(to bottom, ${theme('colors.headerStart')}, ${theme('colors.headerStart')}, ${theme('colors.headerEnd')})`,
      "main-gradient": `linear-gradient(to bottom, ${theme("colors.headerTeal")}, 
      ${theme("colors.middleGradient")}, ${theme("colors.endGradient")})`,

    }),
  },
  variants: {
    extend: {
      fontSize: ["responsive"],
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.text-outline': {
          'color': 'white', // Text color
          '-webkit-text-stroke-width': '8.5px', // Stroke width
          '-webkit-text-stroke-color': '#07246D', // Stroke color
        },
        // Add more utilities for different stroke widths and colors if needed
      };
      addUtilities(newUtilities);
    }),
  ],
};
