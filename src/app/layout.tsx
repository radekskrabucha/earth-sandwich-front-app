import { cx } from 'class-variance-authority'
import { MainLayout } from '@/layout/MainLayout'
import { WalletProvider } from '@/providers/Wallet'
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
      <WalletProvider>
        <MainLayout>{children}</MainLayout>
      </WalletProvider>
    </body>
  </html>
)

export default RootLayout
