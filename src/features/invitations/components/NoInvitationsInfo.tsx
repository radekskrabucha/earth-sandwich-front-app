import { Button } from '@/components/Button'
import { Link } from '@/components/Link'
import { InternalLink } from '@/config/app'

export const NoInvitationsInfo: React.FC = () => (
  <>
    <div className="flex flex-col items-center gap-4 text-center">
      <h3 className="font-main text-2xl text-primary">No invitations yet 😢</h3>
      <p>
        You have no invitations yet, but you can still cook some sandwiches and
        make the best sandwich memories!
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
