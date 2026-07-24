/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        kiwi: {
          DEFAULT: '#8dc63f',
          dark: '#7cb82f',
          light: '#b2d235',
        },
        ink: {
          DEFAULT: '#0e1116',
          soft: '#151a21',
          border: '#242b35',
        },
      },
      fontFamily: {
        sans: [
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
      typography: ({ theme }) => ({
        kiwi: {
          css: {
            '--tw-prose-links': theme('colors.kiwi.DEFAULT'),
            '--tw-prose-invert-links': theme('colors.kiwi.DEFAULT'),
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
