import { type Config } from 'tailwindcss'

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
      screens: {
        xs: '480px',
        xxs: '360px'
      },
      colors: {
        primary: {
          DEFAULT: '#F7B801',
          50: '#FFF9E6',
          100: '#FFF2CC',
          200: '#FFE494',
          300: '#FED762',
          400: '#FECA2F',
          500: '#F7B801',
          600: '#C69501',
          700: '#936F01',
          800: '#614800',
          900: '#332600',
          950: '#191300'
        },
        secondary: {
          DEFAULT: '#F35B04',
          50: '#FFEFE6',
          100: '#FEDFCD',
          200: '#FDBC96',
          300: '#FC9C63',
          400: '#FC7B31',
          500: '#F35B04',
          600: '#C44A03',
          700: '#923702',
          800: '#5F2402',
          900: '#321301',
          950: '#190900'
        },
        background: {
          DEFAULT: '#3D348B',
          50: '#EAE9F7',
          100: '#D5D2EE',
          200: '#A8A2DC',
          300: '#7E76CC',
          400: '#5145BA',
          500: '#3D348B',
          600: '#312A6F',
          700: '#252055',
          800: '#181538',
          900: '#0D0B1E',
          950: '#06060F'
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
