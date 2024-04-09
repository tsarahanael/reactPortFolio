module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js"
  ],
  theme: {
    extend: {
      colors:{

        'darkPri': '#BE3144',
        'darkSec': '#872341',
        'darkTer': '#22092C',
      }
    },
  },
  plugins: [require("flowbite/plugin")],
};