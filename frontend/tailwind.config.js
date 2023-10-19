/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        healHavenBrand50: '#F9F5FF',
        healHavenBrand100: '#F4EBFF',
        healHavenBrand200: '#E9D7FE',
        healHavenBrand300: '#D6BBFB',
        healHavenBrand400: '#B692F6',
        healHavenBrand500: '#9E77ED',
        healHavenBrand600: '#7F56D9',
        healHavenBrand700: '#6941C6',
        healHavenBrand800: '#53389E',
        healHavenBrand900: '#42307D',
        healHavenGray50: '#F9FAFB',
        healHavenGray100: '#F2F4F7',
        healHavenGray300: '#D0D5DD',
        healHavenGray400: '#98A2B3',
        healHavenGray500: '#667085',
        healHavenGray700: '#344054',
        healHavenGray800: '#1D2939',
        healHavenGray900: '#101828',
        healHavenSuccess100: '#D1FADF',
        healHavenSuccess500: '#12B76A',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
