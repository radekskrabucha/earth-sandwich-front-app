import { RestrictedProfileWrapper } from '@/components/RestrictedProfileWrapper'
import { InternalLink } from '@/config/app'
import type { ProfilePageProps } from '../profile/types'
import { InvitationsSection } from './components/InvitationsSection'

export const InvitationsPage: React.FC<ProfilePageProps> = ({
  params: { address }
}) => (
  <RestrictedProfileWrapper
    pushTo={InternalLink.profile(address, '')}
    address={address}
    shouldMatchAddress
  >
    <InvitationsSection address={address} />
  </RestrictedProfileWrapper>
)
