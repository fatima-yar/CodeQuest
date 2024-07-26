/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './client/**/*.tsx'],
  theme: {
    extend: {
      screens: {
        'small-screen': '980px',
        'large-screen': '1360px',
      },
      fontFamily: {
        russo: ['"Russo One"', 'sans-serif'],
        indie: ['"Indie Flower"', 'sans-serif'],
        lilita: ['"Lilita One"', 'cursive'],
        sigmarOne: ['"Sigmar One"', 'cursive'],
      },
    },
  },
  plugins: ['tailwindcss', 'autoprefixer'],
}
