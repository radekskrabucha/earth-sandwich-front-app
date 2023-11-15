import { Button } from '@/components/Button'
import { Image } from '@/components/Image'
import { Link } from '@/components/Link'
import { AppName, InternalLink, Logo } from '@/config/app'

export const Header = () => (
  <header className="layout-container sticky top-0 z-10 border-b border-b-white/10 bg-background/75 backdrop-blur-xl">
    <div className="layout-section flex-row items-center justify-between py-4">
      <Link
        href={InternalLink.home}
        scroll
        aria-label="Home"
      >
        <div className="relative h-10 w-10">
          <Image
            src={Logo}
            alt={AppName}
            fill
            className="object-contain"
          />
        </div>
      </Link>
      <Button>Sign Up</Button>
    </div>
  </header>
)
