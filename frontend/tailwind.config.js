/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        healHavenBrand100: '#F4EBFF',
        healHavenBrand500: '#9E77ED',
        healHavenBrand600: '#7F56D9',
        healHavenBrand700: '#6941C6',
        healHavenBrand800: '#53389E',
        healHavenBrand900: '#42307D',
        healHavenGray50: '#F9FAFB',
        healHavenGray100: '#F2F4F7',
        healHavenGray400: '#98A2B3',
        healHavenGray500: '#667085',
        healHavenGray700: '#344054',
        healHavenGray800: '#1D2939',
        healHavenGray900: '#101828',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
