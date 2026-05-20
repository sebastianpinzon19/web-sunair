/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'sun-blue': '#003366',
        'sun-blue-dark': '#002244',
        'sun-blue-light': '#004488',
        'sun-yellow': '#FFB300',
        'sun-yellow-dark': '#FFA000',
      },
      backgroundImage: {
        'sun-gradient': 'linear-gradient(135deg, #003366 0%, #002244 100%)',
      },
    },
  },
  plugins: [],
};
