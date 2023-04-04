/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
   
    extend: {
      colors:{
        'cobalt-blue':'hsl(234, 85%, 45%);',
        'light-state-blue':'hsl(252, 100%, 67%)',
        'light-loyal-blue':'hsl(241, 81%, 54%)'
      },
    },
  },
  plugins: [],
}

