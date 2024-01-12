/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryColor: "#A3BCB6",
        secondaryColor: "#607274"
  
      }
   

    },
  },
  plugins: [],
}

