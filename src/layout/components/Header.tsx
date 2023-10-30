import { Link } from '@/components/Link'
import { InternalLink } from '@/config/app'
import { HeaderMenu } from './HeaderMenu'

export const Header = () => (
  <header className="layout-container sticky top-0 border-b border-gray-300 bg-background-400">
    <div className="layout-section">
      <nav className="flex items-center gap-4">
        <Link
          className="z-[1001] text-4xl"
          href={InternalLink.home}
        >
          🥑
        </Link>
        <HeaderMenu />
      </nav>
    </div>
  </header>
)
