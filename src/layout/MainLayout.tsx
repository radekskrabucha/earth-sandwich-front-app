import { Footer, Header } from './components'

export const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <>
    <Header />
    <main className="layout-container flex-1">{children}</main>
    <Footer />
  </>
)
