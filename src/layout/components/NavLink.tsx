import { Link } from '@/components/Link'
import type { LinkHref } from '@/types/url'

type NavLinkProps = {
  href: LinkHref
  text: string
  onClick: VoidFunction
}

export const NavLink: React.FC<NavLinkProps> = ({ href, text, onClick }) => (
  <li>
    <Link
      onClick={onClick}
      href={href}
    >
      <p className="font-secondary text-lg text-gray-600 transition-colors duration-150 hover:text-secondary-400 max-md:text-base">
        {text}
      </p>
    </Link>
  </li>
)
