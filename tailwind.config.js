/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {  fontFamily: {
      'Neue Montreal': ['Neue Montreal' ],
      // Replace 'NeueMontreal-Regular' with the actual font file name
    },
     
      screens: {
        'md': {'max': '767px'},
         
      },
    }, 
  },
  plugins: [],
}

