const flowbite = require('flowbite-react/tailwind');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    flowbite.content()
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': 'rgb(46,46,71)'
      }
    }
  },
  plugins: [
    flowbite.plugin()
  ]
};