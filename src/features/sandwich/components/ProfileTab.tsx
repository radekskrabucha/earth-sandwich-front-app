'use client'

import { cx } from 'class-variance-authority'
import { usePathname } from 'next/navigation'
import { Link } from '@/components/Link'

type ProfileTabProps = {
  name: string
  href: string
}

export const ProfileTab: React.FC<ProfileTabProps> = ({ name, href }) => {
  const pathname = usePathname()
  const isActive = href === pathname

  return (
    <Link
      href={href}
      className={cx(
        'flex flex-1 items-center justify-center p-3 capitalize transition-colors',
        isActive
          ? 'bg-secondary hover:bg-secondary'
          : 'bg-black/5 hover:bg-black/10'
      )}
    >
      <p>{name}</p>
    </Link>
  )
}
