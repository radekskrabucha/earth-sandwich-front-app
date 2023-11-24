import { Button } from '@/components/Button'
import { Link } from '@/components/Link'
import { InternalLink } from '@/config/app'

export const NoPendingSandwichesInfo: React.FC = () => (
  <>
    <div className="flex flex-col items-center gap-4 text-center">
      <h3 className="font-main text-2xl text-primary">
        No one cooked here, yet 👀
      </h3>
      <p>
        You haven't cooked any sandwiches yet, but you can still cook some and
        become a sandwich master!
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
