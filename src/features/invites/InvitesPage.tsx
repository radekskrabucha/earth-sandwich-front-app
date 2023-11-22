import { RestrictedProfileWrapper } from '@/components/RestrictedProfileWrapper'
import { InternalLink } from '@/config/app'
import type { ProfilePageProps } from '../profile/types'
import { InvitesSection } from './components/InvitesSection'

export const InvitesPage: React.FC<ProfilePageProps> = ({
  params: { address }
}) => (
  <RestrictedProfileWrapper
    pushTo={InternalLink.profile(address, '')}
    address={address}
  >
    <InvitesSection address={address} />
  </RestrictedProfileWrapper>
)
