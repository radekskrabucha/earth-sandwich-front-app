import { RestrictedProfileWrapper } from '@/components/RestrictedProfileWrapper'
import { InternalLink } from '@/config/app'
import type { ProfilePageProps } from '@/features/sandwich/types'
import { InvitationsSection } from './components/InvitationsSection'

export const InvitationsPage: React.FC<ProfilePageProps> = ({
  params: { address }
}) => (
  <RestrictedProfileWrapper
    pushTo={InternalLink.profile(address, '/sandwiches')}
    address={address}
    shouldMatchAddress
  >
    <InvitationsSection address={address} />
  </RestrictedProfileWrapper>
)
