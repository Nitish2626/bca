/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes:{
        fade:{
          "0%":{opacity:"0"},
          "100%":{opacity:"1"},
        },
        spin:{
          "0%":{strokeDasharray:"50",strokeDashoffset:"80"},
          "100%":{strokeDasharray:"100",strokeDashoffset:"0"}
        }
      },
      animation:{
        fade:"fade 0.2s linear",
        spin:"spin 1s linear infinite"
      }
    },
  },
  plugins: [],
}

