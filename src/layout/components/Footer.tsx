import { Image } from '@/components/Image'
import { AppName, Logo } from '@/config/app'
import { getCurrentYear } from '@/utils/date'

export const Footer = () => (
  <footer className="layout-section items-center gap-6 py-32 text-center max-md:py-20">
    <div className="relative h-20 w-20">
      <Image
        src={Logo}
        alt={AppName}
        fill
        className="object-contain"
      />
    </div>
    <p className="text-white/50">
      © {getCurrentYear()} {AppName}
    </p>
  </footer>
)
