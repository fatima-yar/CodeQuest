/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './client/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        russo: ['"Russo One"', 'sans-serif'],
        indie: ['"Indie Flower"', 'sans-serif'],
        lilita: ['"Lilita One"', 'cursive'],
      },
    },
  },
  plugins: ['tailwindcss', 'autoprefixer'],
}
