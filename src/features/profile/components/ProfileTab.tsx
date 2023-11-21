'use client'

import { cx } from 'class-variance-authority'
import { useSelectedLayoutSegment } from 'next/navigation'
import { Link } from '@/components/Link'
import { InternalLink } from '@/config/app'
import type { HexString } from '@/types/common'

type ProfileTabProps = {
  name: string
  segment: string
  address: HexString
}

export const ProfileTab: React.FC<ProfileTabProps> = ({
  name,
  segment,
  address
}) => {
  const routerSegment = useSelectedLayoutSegment()
  const isActive =
    (routerSegment === null && !segment) || routerSegment === segment

  return (
    <Link
      href={InternalLink.profile(address, segment)}
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
