/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        "Space-Grotesk": ["Space Grotesk", "sans-serif"],
        "Nunito-Sans" : [ "Nunito Sans", "sans-serif"]
      },
      colors : {
        "primary"  : "#00D2FF",
        "secondary" : "#2D2D2D",
        "accent" : "#666666",
      },
      backgroundImage : {
        "gradient-primary" : "linear-gradient(180deg, #00D2FF 0%, #059DBE 100%)",
        "gradient-secondary" : "linear-gradient(161.45deg, #00D2FF -5.54%, #9AEDFF 59.11%)"
      },

      boxShadow : {
         "Arrow" :  " 0px 4px 15px 0px #0000001A",
         "Box" : "0px 10px 30px 0px #02B6DC26"
      }
    },
  },
  plugins: [],
}

