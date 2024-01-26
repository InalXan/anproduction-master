/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#222',
      'second': '#f6f6f2',
      'dark': '#000',
      'light': '#fff',
      'gray': '#777',
      'success': '#d2b55b',
      'danger': 'crimson',
    },
    extend: {
      boxShadow: {
        'box': '0.5rem 0.5rem #d2b55b, -0.5rem -0.5rem #777',
        'box-md': '2px 4px 4px rgba(46,91,173,0.6)'
      }
    },
  },
  plugins: [],
}