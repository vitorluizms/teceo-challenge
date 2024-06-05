/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      h1: [
        '1.25rem',
        {
          lineHeight: '1.5rem', // 32px
          letterSpacing: '-0.02em',
          fontWeight: 700,
        },
      ],
      h2: [
        '1rem',
        {
          // 20px
          lineHeight: '1.25rem', // 28px
          letterSpacing: '-0.015em',
          fontWeight: 400,
        },
      ],
      h3: [
        '0.9rem',
        {
          // 18px
          lineHeight: '1.125rem', // 24px
          letterSpacing: '-0.01em',
          fontWeight: '400',
        },
      ],
      p: [
        '0.8rem',
        {
          // 14px
          lineHeight: '1rem', // 20px
          letterSpacing: '0',
          fontWeight: '300',
        },
      ],
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'gray-8C8C8C': '#8C8C8C',
        'gray-FAFAFA': '#FAFAFA',
        'column-text': '#5c6b77',
        'green-watching': '#4CAF50',
        'blue-queue': '#2196F3',
        'purple-finished': '#9C27B0',
      },
    },
  },
  plugins: [],
}
