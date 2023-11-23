import { Button } from '@/components/Button'
import { Link } from '@/components/Link'
import { InternalLink } from '@/config/app'

export const NoInvitesInfo: React.FC = () => (
  <>
    <div className="flex flex-col items-center gap-4 text-center">
      <h3 className="font-main text-2xl text-primary">No invites yet 😢</h3>
      <p>
        You have no invites yet, but you can still cook some sandwiches and make
        the best sandwich memories!
      </p>
    </div>
    <Button
      asChild
      className="self-center"
    >
      <Link href={InternalLink.createSandwich}>Cook some sandwiches</Link>
    </Button>
  </>
)
