/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter','sans-serif'],
      },
      colors: {
        'primary-t': '#3e3e3f',
        'secondary-t': '#ffffff',
        'primary-b': '#008977',
        'secondary-b': '#fbfaf3',
        'accent': '#0e2d3f'
      },
    },
  },
  plugins: [],
}
