import { Footer, Header } from './components'

export const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className="relative flex h-screen w-screen max-w-full flex-col items-center overflow-x-hidden bg-background font-secondary text-white">
    <Header />
    <main className="layout-container z-0 flex-1">{children}</main>
    <Footer />
  </div>
)
