/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        healHavenBrand600: '#7F56D9',
        healHavenBrand700: '#6941C6',
        healHavenBrand800: '#53389E',
        healHavenBrand900: '#42307D',
        healHavenGray500: '#667085',
        healHavenGray700: '#344054',
        healHavenGray800: '#1D2939',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
