import { RestrictedProfileWrapper } from '@/components/RestrictedProfileWrapper'
import { InternalLink } from '@/config/app'
import type { ProfilePageProps } from '../profile/types'

export const InvitesPage: React.FC<ProfilePageProps> = ({
  params: { address }
}) => (
  <RestrictedProfileWrapper
    pushTo={InternalLink.profile(address, '')}
    address={address}
  >
    <section className="layout-section">
      <h2>Invites page</h2>
    </section>
  </RestrictedProfileWrapper>
)
