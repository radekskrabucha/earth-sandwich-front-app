import { cx } from 'class-variance-authority'
import { MainLayout } from '@/layout/MainLayout'
import { Providers } from '@/providers/Providers'
import { MainFont, SecondaryFont } from '@/styles/fonts'
import '@/styles/globals.css'

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
      <Providers>
        <MainLayout>{children}</MainLayout>
      </Providers>
    </body>
  </html>
)

export default RootLayout
