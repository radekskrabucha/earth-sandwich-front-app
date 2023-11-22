'use client'

import { useQuery } from '@tanstack/react-query'
import { Avatar } from '@/components/Avatar'
import { Link } from '@/components/Link'
import { InternalLink } from '@/config/app'
import { getLSP3ProfileData } from '@/features/profile/utils'
import { QueryKey } from '@/lib/reactQuery'
import type { HexString } from '@/types/common'
import { createIpfsLink } from '@/utils/images'

type AccountProps = {
  address: HexString
}

export const Account: React.FC<AccountProps> = ({ address }) => {
  const { data: profile } = useQuery({
    queryFn: () => getLSP3ProfileData(address),
    queryKey: [QueryKey.upProfile, address]
  })

  return (
    <Link href={InternalLink.profile(address, '')}>
      <Avatar
        src={
          profile?.profileImage &&
          profile?.profileImage[0] &&
          createIpfsLink(profile.profileImage?.[0].url)
        }
        className="h-10 w-10"
        avatarProps={{
          alt: profile?.name || ''
        }}
      />
    </Link>
  )
}
