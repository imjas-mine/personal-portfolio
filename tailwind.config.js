/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
     keyframes:{
      float:{
        '0%':{transform:'translateY(0)'},
        '50%':{transform:'translateY(-10px)'},
        '100%':{transform:'translateY(0)'},
      }
     },
     animation:{
      float:'float 3s ease-in-out infinite'
     },
      backgroundImage: {
        "primary-gradient":
          "linear-gradient(90deg, [#576cbc] 70%,rgba(255,255,255,0) 120% )",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
