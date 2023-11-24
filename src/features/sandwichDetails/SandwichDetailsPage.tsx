import { Button } from '@/components/Button'
import { Link } from '@/components/Link'
import { InternalLink } from '@/config/app'
import { SandwichInfoWrapper } from '@/features/sandwich/components/SandwichInfoWrapper'
import type { SandwichDetailsPageProps } from './types'

export const SandwichDetailsPage: React.FC<SandwichDetailsPageProps> = ({
  params: { id }
}) => (
  <SandwichInfoWrapper address={id}>
    {sandwich =>
      sandwich.isFinalized ? null : (
        <section className="layout-section items-center">
          <div className="flex items-center gap-6">
            <Button
              asChild
              variant="primary"
            >
              <Link
                href={InternalLink.sandwichDetails(id, '/accept-invitation')}
              >
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
    }
  </SandwichInfoWrapper>
)
