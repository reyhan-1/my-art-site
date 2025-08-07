/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['"Noto Serif Display"', 'serif'],
        'urbanist': ['Urbanist', 'sans-serif'],
        'quicksand': ['Quicksand', 'sans-serif'],
      }
    },
  },
  plugins:    [require('@tailwindcss/typography')],
  // daisyui: {
  //   themes: ['cupcake'], // ✅ sets a white background by default
  // },
};