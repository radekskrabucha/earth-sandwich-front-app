import { Link } from '@/components/Link'
import { ExternalLink, InternalLink } from '@/config/app'
import { getCurrentYear } from '@/utils/date'
import { client } from '@/utils/env'
import { SocialIcons } from './SocialIcons'

export const Footer = () => (
  <footer className="layout-container bg-background-950 text-white">
    <div className="layout-section">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4">
        <div className="flex flex-wrap items-center gap-2">
          <Link
            className="text-4xl"
            href={InternalLink.home}
          >
            🥑
          </Link>
          <div>
            <h3 className="font-main text-lg text-gray-400">
              Next app router template
            </h3>
            <p className="max-w-[260px] font-secondary text-sm text-gray-500 max-sm:max-w-none">
              A starter for Next.js using app router with TypeScript and
              Tailwind CSS.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2 max-sm:items-start">
          <SocialIcons />
          <Link href={ExternalLink.email}>
            <p className="text-right font-secondary text-sm text-gray-500 transition-colors duration-150 hover:text-gray-300 max-sm:text-left">
              {client.NEXT_PUBLIC_EMAIL}
            </p>
          </Link>
        </div>
      </div>
      <div className="border-t border-gray-700 pt-4">
        <p className="text-sm text-gray-500">
          © {getCurrentYear()} Radek Skrabucha
        </p>
      </div>
    </div>
  </footer>
)
