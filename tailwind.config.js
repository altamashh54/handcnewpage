/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        mulish: ['Mulish', 'sans-serif'],
      },
      colors: {
        'soft-pink': '#ffdfd9',
      },
    },
  },
  plugins: [],
};