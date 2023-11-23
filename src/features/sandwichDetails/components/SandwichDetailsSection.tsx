import { Avatar } from '@/components/Avatar'
import { ProfileInfoWrapper } from '@/components/ProfileInfoWrapper'
import type { SandwichRaw } from '@/models/sandwich'

export const SandwichDetailsSection: React.FC<SandwichRaw> = ({
  name,
  owner
}) => (
  <section className="layout-seciton items-center gap-8 text-center">
    <h3 className="font-main text-2xl">{name}</h3>
    <ProfileInfoWrapper address={owner}>
      {profile => <Avatar src={profile?.profileImageUrl} />}
    </ProfileInfoWrapper>
  </section>
)
