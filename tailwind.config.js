/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          bg: 'var(--theme-bg)',
          primary: 'var(--theme-primary)',
          'primary-light': 'var(--theme-primary-light)',
          'primary-hover': 'var(--theme-primary-hover)',
          secondary: 'var(--theme-secondary)',
          accent: 'var(--theme-accent)',
          card: 'var(--theme-card)',
          input: 'var(--theme-input)',
          danger: 'var(--theme-danger)',
          'glass-1': 'var(--theme-glass-1)',
          'glass-2': 'var(--theme-glass-2)',
        }
      }
    },
  },

  plugins: [],
}