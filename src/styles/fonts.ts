import { Unbounded, Instrument_Sans } from 'next/font/google'

export const MainFont = Unbounded({
  subsets: ['latin'],
  weight: ['500', '700', '800'],
  fallback: ['sans-serif'],
  variable: '--font-main',
  display: 'swap'
})

export const SecondaryFont = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400'],
  fallback: ['sans-serif'],
  variable: '--font-secondary',
  display: 'swap'
})
