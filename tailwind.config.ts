import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAF8F5', // Luxury warm alabaster / ivory
        foreground: '#1c1917', // Deep espresso / charcoal
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#1c1917',
          hover: '#FDFBF7',
        },
        surface: {
          DEFAULT: '#F5F2EB',
          muted: '#EFECE4',
        },
        primary: {
          DEFAULT: '#b89047',
          light: '#d4af37',
          dark: '#8c6b2d',
          foreground: '#FFFFFF',
        },
        sharp: {
          DEFAULT: '#E5A93C', // Sharp luminous gold accent (3% CTA accent)
          hover: '#F3C766',
          light: '#F8D88E',
          dark: '#C88E28',
          glow: 'rgba(229, 169, 60, 0.35)',
        },
        bronze: {
          DEFAULT: '#352f28', // Deep espresso bronze (Dark hero and focal sections)
          dark: '#28231d',
          card: '#2d2720',
          light: '#463e35',
        },
        gold: {
          50: '#faf6eb',
          100: '#f4ebd2',
          200: '#e8d5a3',
          300: '#dcbe74',
          400: '#d4af37',
          500: '#b89047',
          600: '#9d7c38',
          700: '#8c6b2d',
          800: '#6d5120',
          900: '#4a3715',
        },
        charcoal: {
          DEFAULT: '#1c1917',
          light: '#292524',
          muted: '#57534e',
        },
        border: 'rgba(0, 0, 0, 0.08)',
        'border-gold': 'rgba(184, 144, 71, 0.35)',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-anton)', 'Impact', 'Arial Black', 'sans-serif'],
        script: ['var(--font-kaushan)', 'cursive'],
        space: ['var(--font-space)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        card: '0 10px 30px -10px rgba(0, 0, 0, 0.07)',
        hover: '0 20px 40px -15px rgba(0, 0, 0, 0.12)',
        'gold-button': '0 4px 20px rgba(184, 144, 71, 0.25)',
      },
      borderRadius: {
        '2xl': '20px',
        xl: '14px',
        lg: '10px',
        md: '8px',
        sm: '4px',
      },
    },
  },
  plugins: [],
};

export default config;
