import { cx } from 'class-variance-authority'
import { MainLayout } from '@/layout/MainLayout'
import { MainFont, SecondaryFont } from '@/styles/fonts'
import '@/styles/globals.css'
import { getMetadata } from '@/utils/seo'

export const metadata = getMetadata({
  title: 'Home'
})

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <html lang="en">
    <head>
      <link
        rel="preload"
        as="image/svg+xml"
        href="sprite.svg"
      />
    </head>
    <body className={cx(MainFont.variable, SecondaryFont.variable)}>
      <MainLayout>{children}</MainLayout>
    </body>
  </html>
)

export default RootLayout
