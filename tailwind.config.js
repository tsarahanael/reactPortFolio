module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js"
  ],
  theme: {
    extend: {
      colors:{

        'darkPri': '#280B45',
        'darkSec': '#61105E',
        'darkTer': '#C84771',
        'darkFour': '#FFE98A',

        'lightPri': '#78C1F3',
        'lightSec': '#9BE8D8',
        'lightTer': '#E2F6CA',
        'lightFour': '#F8FDCF',
      }
    },
  },
  plugins: [require("flowbite/plugin")],
};