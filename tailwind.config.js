/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js}',
  ],
  theme: {
    extend: {
      transitionDuration: {
        DEFAUL: '400ms',
      },
    },
  },
  plugins: [],
};
