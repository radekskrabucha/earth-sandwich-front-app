import { Link } from '@/components/Link'
import { InternalLink } from '@/config/app'
import { ConnectWallet } from './components/ConnectWallet'

export const LoginPage = () => (
  <section className="layout-section">
    <h2>Login Page</h2>
    <Link href={InternalLink.createSandwich}>create sandwich</Link>
    <ConnectWallet />
  </section>
)
