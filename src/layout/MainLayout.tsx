import { Footer } from './components'

export const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className="relative flex h-screen max-w-full flex-col items-center overflow-x-hidden bg-background font-secondary text-white">
    <main className="layout-container flex-1">{children}</main>
    <Footer />
  </div>
)
