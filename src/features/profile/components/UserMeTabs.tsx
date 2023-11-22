'use client'

import { InternalLink } from '@/config/app'
import { useAccountWithRouter } from '@/hooks/useAccountWithRouter'
import type { HexString } from '@/types/common'
import { ProfileTab } from './ProfileTab'

type UserMeTabsProps = {
  address: HexString
}

export const UserMeTabs: React.FC<UserMeTabsProps> = ({
  address: paramAddress
}) => {
  const { getIsUserAccount, push } = useAccountWithRouter()

  if (!getIsUserAccount(paramAddress)) {
    push(InternalLink.profile(paramAddress, ''))

    return null
  }

  return (
    <>
      <ProfileTab
        name="invites"
        href={InternalLink.profile(paramAddress, '/sandwich-invites')}
      />
    </>
  )
}
