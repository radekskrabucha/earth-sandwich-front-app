import { InternalLink } from '@/config/app'
import { NavLink } from './NavLink'

type NavLinksProps = {
  onNavLinkClick: VoidFunction
}

export const NavLinks: React.FC<NavLinksProps> = ({ onNavLinkClick }) => (
  <ul className="flex flex-col gap-2">
    <NavLink
      href={InternalLink.home}
      text="Home"
      onClick={onNavLinkClick}
    />
  </ul>
)
