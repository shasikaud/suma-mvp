/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: "#66B701",
        secondary: '#F2F2F2',
        grayBlue: '#515863',
        lightGray: '#F2F2F2',
        backgroundColor: '#FAFAFA',
        primaryHover: '#75D300'
      },
      width: {
        'width265': '265px',
      }
    },
  },
  plugins: [],
}
