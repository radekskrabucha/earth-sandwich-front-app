import { Image } from '@/components/Image'
import { AppName } from '@/config/app'
import Logo from '@/public/images/shared/logo.svg'
import { getCurrentYear } from '@/utils/date'

export const Footer = () => (
  <footer className="layout-section items-center gap-6 py-32 text-center max-md:py-20">
    <div className="relative h-10 w-10">
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
