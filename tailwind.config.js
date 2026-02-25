/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        surface: '#05070f',
        card: '#0d111d',
        border: '#1b2236',
        accent: '#8b5cf6',
        text: '#eef1f7',
        muted: '#8b93a7',
      },
      boxShadow: {
        panel: '0 12px 40px rgba(2, 6, 23, 0.45)',
      },
    },
  },
  plugins: [],
}
