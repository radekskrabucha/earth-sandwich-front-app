import { Button } from '@/components/Button'
import { Link } from '@/components/Link'
import { InternalLink } from '@/config/app'
import { ProfilePageProps } from './types'

export const ProfilePage: React.FC<ProfilePageProps> = ({
  params: { address }
}) => (
  <section className="layout-section">
    <h1>Profile page</h1>
    <Button
      asChild
      variant="link"
    >
      <Link href={InternalLink.profileSandwiches(address)}>
        Profile sandwiches
      </Link>
    </Button>
  </section>
)
