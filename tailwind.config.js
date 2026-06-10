/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-accent-500',
    'bg-accent-600',
    'to-accent-500',
    { pattern: /bg-accent-(500|600)/, variants: ['hover'] },
    { pattern: /ring-primary-(400)/, variants: ['focus'] },
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#e6f2ff',
          100: '#bddeff',
          200: '#80c4ff',
          300: '#3da5ff',
          400: '#0a8eff',
          500: '#0071d9',
          600: '#0058b5',
          700: '#003f8a',
          800: '#002760',
          900: '#00113a',
        },
        navy: {
          50:  '#e8edf7',
          100: '#bfcde9',
          200: '#8ca9d6',
          300: '#5882c2',
          400: '#2a60af',
          500: '#0d469b',
          600: '#083680',
          700: '#052860',
          800: '#031a40',
          900: '#010c22',
        },
        accent: {
          50:  '#e6faf8',
          100: '#baf0ea',
          200: '#86e4da',
          300: '#4dd4c6',
          400: '#18c2b1',
          500: '#00a896',
          600: '#008578',
          700: '#00625a',
          800: '#003f3b',
          900: '#001f1d',
        },
        gold: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },
      },
      fontFamily: {
        sans: ['Nunito', 'system-ui', 'sans-serif'],
        heading: ['Raleway', 'system-ui', 'sans-serif'],
        hindi: ['"Tiro Devanagari Hindi"', 'Poppins', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 8px 32px rgba(0, 0, 0, 0.14)',
        'nav': '0 2px 20px rgba(0, 0, 0, 0.10)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #031a40 0%, #0071d9 55%, #00a896 100%)',
        'card-gradient': 'linear-gradient(135deg, #0071d9 0%, #031a40 100%)',
        'section-gradient': 'linear-gradient(180deg, #e6f2ff 0%, #ffffff 100%)',
      },
      borderRadius: {
        '5': '5px',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'counter': 'counter 2s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
