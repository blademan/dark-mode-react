/** @type {import('tailwindcss').Config} */

module.exports = {
 darkMode: 'class',
 content: ['./src/**/*.{js,jsx,ts,tsx}'],
 theme: {
  extend: {
   textColor: {
    fontColor: 'var( --clr-font)',
    fontAccent: 'var(--clr-primary)',
   },
   backgroundColor: {
    primary: 'var( --clr-bcg)',
   },
  },
 },

 plugins: [],
};
