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
          50:  '#f0f5fa',
          100: '#e1ebf5',
          200: '#c2d7ea',
          300: '#91badd',
          400: '#589acc',
          500: '#3480b9',
          600: '#23659b',
          700: '#1d517e',
          800: '#1a4569',
          900: '#183a58',
        },
        navy: {
          50:  '#e2e8f0',
          100: '#cbd5e1',
          200: '#94a3b8',
          300: '#64748b',
          400: '#475569',
          500: '#334155',
          600: '#1e293b',
          700: '#0f172a',
          800: '#020617',
          900: '#000000',
        },
        accent: {
          50:  '#f0f8ff',
          100: '#e0f1fe',
          200: '#b9e3fd',
          300: '#7dd0fb',
          400: '#3abaf8',
          500: '#0ea4e9',
          600: '#0283c7',
          700: '#036aa1',
          800: '#075985',
          900: '#0c4a6e',
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
