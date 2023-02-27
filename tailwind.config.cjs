// const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
  plugins: [
    require('@tailwindcss/typography'),
    require('./lib/index')({
      tokens: {
        fontFamily: {
          sans: ['GandhiSans', 'sans-serif'],
        },
      },
      dark: {
        tokens: {
          fontFamily: {},
        },
      },
    }),
  ],
  darkMode: 'class',
};
