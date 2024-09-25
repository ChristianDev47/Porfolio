import animations from "tailwindcss-animated";
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      maxWidth: {
        '6xl': '66rem',
      },
    },
  },
  plugins: [
    animations
  ],
}
