import { Link } from '@/components/Link'
import { AppName, InternalLink } from '@/config/app'
import { getCurrentYear } from '@/utils/date'

export const Footer = () => (
  <footer className="layout-container bg-background-950 text-white">
    <div className="layout-section">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4">
        <div className="flex flex-wrap items-center gap-2">
          <Link
            className="text-4xl"
            href={InternalLink.home}
          >
            🍔
          </Link>
          <div>
            <h3 className="font-main text-lg text-gray-400">{AppName}</h3>
            <p className="max-w-[260px] font-secondary text-sm text-gray-500 max-sm:max-w-none">
              Just eat it. We'll make more.
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 pt-4">
        <p className="text-sm text-gray-500">
          © {getCurrentYear()} {AppName}
        </p>
      </div>
    </div>
  </footer>
)
