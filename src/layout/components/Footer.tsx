import { Image } from '@/components/Image'
import { Link } from '@/components/Link'
import { AppName, InternalLink, Logo } from '@/config/app'
import { getCurrentYear } from '@/utils/date'

export const Footer = () => (
  <footer className="layout-section items-center gap-6 py-32 text-center max-md:py-20">
    <Link
      href={InternalLink.home}
      scroll
      aria-label="Home"
    >
      <div className="relative h-20 w-20">
        <Image
          src={Logo}
          alt={AppName}
          fill
          className="object-contain"
        />
      </div>
    </Link>
    <p className="text-white/50">
      © {getCurrentYear()} {AppName}
    </p>
  </footer>
)
