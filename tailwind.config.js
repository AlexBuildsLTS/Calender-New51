/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(222, 47%, 11%)',
        foreground: 'hsl(213, 31%, 91%)',
        primary: {
          DEFAULT: 'hsl(160, 84%, 39%)',
          foreground: 'hsl(0, 0%, 98%)',
        },
        secondary: {
          DEFAULT: 'hsl(222, 47%, 15%)',
          foreground: 'hsl(0, 0%, 98%)',
        },
        accent: {
          DEFAULT: 'hsl(199, 89%, 48%)',
          foreground: 'hsl(0, 0%, 98%)',
        },
        card: {
          DEFAULT: 'hsl(222, 47%, 13%)',
          foreground: 'hsl(213, 31%, 91%)',
        },
        muted: {
          DEFAULT: 'hsl(222, 47%, 15%)',
          foreground: 'hsl(215, 20%, 65%)',
        },
        border: 'hsl(222, 47%, 15%)',
        brand: {
          blue: 'hsl(199, 89%, 48%)',
          green: 'hsl(160, 84%, 39%)',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [],
};