import { Button } from '@/components/Button'
import { Link } from '@/components/Link'
import { InternalLink } from '@/config/app'
import { type ProfilePageProps } from './types'

export const ProfileSandwichesPage: React.FC<ProfilePageProps> = ({
  params: { address }
}) => (
  <section className="layout-section">
    <h1>Profile sandwiches page</h1>
    <Button
      asChild
      variant="link"
    >
      <Link href={InternalLink.profile(address)}>Profile</Link>
    </Button>
  </section>
)
