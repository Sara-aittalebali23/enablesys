/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors:{
      "primary":"#1186df",
      'black': '#0a0a0a'
    },
    extend: {
      keyframes: {
        'draw-line': {
          '0%': { height: '0' },
          '100%': { height: '100%' },
        },
      },
      animation: {
        'draw-line': 'draw-line 10s ease forwards',
      },
      
  },
  
  plugins: [],
}
}
