'use client'

import { RestrictedProfileWrapper } from '@/components/RestrictedProfileWrapper'
import { InternalLink } from '@/config/app'
import type { HexString } from '@/types/common'
import { ProfileTab } from './ProfileTab'

type UserMeTabsProps = {
  address: HexString
}

export const UserMeTabs: React.FC<UserMeTabsProps> = ({
  address: paramAddress
}) => (
  <RestrictedProfileWrapper
    pushTo={InternalLink.profile(paramAddress, '/sandwiches')}
    shouldMatchAddress
    address={paramAddress}
  >
    <ProfileTab
      name="invitations"
      href={InternalLink.profile(paramAddress, '/sandwiches/invitations')}
    />
  </RestrictedProfileWrapper>
)
