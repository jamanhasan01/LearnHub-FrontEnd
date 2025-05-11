/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
          mainClr:"#4a2d72",
          textClr:"#43CC68",
        },
  },
},
  plugins: [daisyui],
}