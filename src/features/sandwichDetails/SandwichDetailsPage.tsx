import { Button } from '@/components/Button'
import { Link } from '@/components/Link'
import { InternalLink } from '@/config/app'
import type { SandwichDetailsPageProps } from './types'

export const SandwichDetailsPage: React.FC<SandwichDetailsPageProps> = ({
  params: { id }
}) => (
  <section className="layout-section items-center">
    <div className="flex items-center gap-6">
      <Button
        asChild
        variant="primary"
      >
        <Link href={InternalLink.sandwichDetails(id, '/accept-invitation')}>
          Accept
        </Link>
      </Button>
      <Button
        asChild
        variant="outline"
      >
        <Link href={InternalLink.sandwichDetails(id, '/mint')}>Cook</Link>
      </Button>
    </div>
  </section>
)
