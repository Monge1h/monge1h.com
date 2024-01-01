/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        kiwi:{
          DEFAULT: '#8dc63f',
          dark: '#7cb82f',
          light: '#b2d235',
        },
      }
    },
  },
  prefix: 'tw-',
  important: true,
  plugins: [],
  corePlugins:{
    preflight: false,
  }
}

