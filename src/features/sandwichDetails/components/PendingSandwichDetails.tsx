import { RestrictedProfileWrapper } from '@/components/RestrictedProfileWrapper'
import { InternalLink } from '@/config/app'
import type { SandwichRaw } from '@/models/sandwich'

export const PendingSandwichDetails: React.FC<SandwichRaw> = ({
  owner,
  name
}) => (
  <RestrictedProfileWrapper
    pushTo={InternalLink.profile(owner, '')}
    shouldBeConnected
  >
    <section className="layout-section">
      <h3 className="font-main text-2xl">{name}</h3>
      <p className="text-center">
        This sandwich is not finalized yet. You can see the participants below.
      </p>
    </section>
  </RestrictedProfileWrapper>
)
