import { Montserrat, Barlow } from 'next/font/google'

export const MainFont = Barlow({
  subsets: ['latin'],
  weight: ['500', '700', '800'],
  fallback: ['sans-serif'],
  variable: '--font-main',
  display: 'swap'
})

export const SecondaryFont = Montserrat({
  subsets: ['latin'],
  weight: ['400'],
  fallback: ['sans-serif'],
  variable: '--font-secondary',
  display: 'swap'
})
