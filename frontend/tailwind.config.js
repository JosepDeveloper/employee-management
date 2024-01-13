import { nextui } from '@nextui-org/theme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/@nextui-org/theme/dist/components/(button|snippet|code|input).js',
    './node_modules/@nextui-org/theme/dist/components/table.js',
    './node_modules/@nextui-org/theme/dist/components/chip.js',
    './node_modules/@nextui-org/theme/dist/components/*.js'
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()]
}

