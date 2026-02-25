/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sora', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Sora', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      colors: {
        surface: '#0a0a0b',
        card: '#141416',
        border: '#27272a',
        accent: '#6366f1',
        text: '#fafafa',
        muted: '#a1a1aa',
      },
      boxShadow: {
        panel: '0 12px 36px rgba(5, 5, 8, 0.5)',
      },
    },
  },
  plugins: [],
}
