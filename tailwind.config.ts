import { Config } from 'tailwindcss'

const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layout/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#fdc244',
          50: '#fffdf5',
          100: '#fffced',
          200: '#fff6d1',
          300: '#ffefb5',
          400: '#fcda7c',
          500: '#fdc244',
          600: '#e3a736',
          700: '#bd8026',
          800: '#965e18',
          900: '#73400e',
          950: '#4a2306'
        },
        secondary: {
          DEFAULT: '#447ffd',
          50: '#f5fbff',
          100: '#edf8ff',
          200: '#d1ebff',
          300: '#b5dbff',
          400: '#7cb1fc',
          500: '#447ffd',
          600: '#366ae3',
          700: '#2651bd',
          800: '#183896',
          900: '#0e2573',
          950: '#06144a'
        },
        background: {
          DEFAULT: '#ebf6fc',
          50: '#ffffff',
          100: '#fcfeff',
          200: '#fafeff',
          300: '#f7fdff',
          400: '#f0f9fc',
          500: '#ebf6fc',
          600: '#bfd5e3',
          700: '#84a4bd',
          800: '#547696',
          900: '#304f73',
          950: '#142a4a'
        },
        success: {
          DEFAULT: '#25fa61',
          50: '#f5fffb',
          100: '#ebfff7',
          200: '#c9ffe7',
          300: '#a7fcd2',
          400: '#68fca1',
          500: '#25fa61',
          600: '#1fe053',
          700: '#14ba3e',
          800: '#0e962d',
          900: '#08701d',
          950: '#03470f'
        },
        error: {
          DEFAULT: '#e0221b',
          50: '#fcf7f2',
          100: '#fcf0e6',
          200: '#f7d7c1',
          300: '#f2b89d',
          400: '#eb7459',
          500: '#e0221b',
          600: '#c91c16',
          700: '#a8140f',
          800: '#870e09',
          900: '#660705',
          950: '#420302'
        },
        warning: {
          DEFAULT: '#ffcc00',
          50: '#fffef2',
          100: '#fffce6',
          200: '#fff8bf',
          300: '#fff199',
          400: '#ffe14d',
          500: '#ffcc00',
          600: '#e6b000',
          700: '#bf8600',
          800: '#996100',
          900: '#734300',
          950: '#4a2600'
        }
      },
      fontFamily: {
        main: 'var(--font-main)',
        secondary: 'var(--font-secondary)'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
} satisfies Config

export default config
