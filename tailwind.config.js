/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
    'joss': ["Josefin Sans", 'sans-serif']
  },
  backgroundImage:{
    'arr':"url(./src/assets/news.png)",
  }
}
}