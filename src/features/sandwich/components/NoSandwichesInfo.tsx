import { Button } from '@/components/Button'
import { Link } from '@/components/Link'
import { InternalLink } from '@/config/app'

type NoSandwichesInfoProps = {
  title: string
  description: string
}

export const NoSandwichesInfo: React.FC<NoSandwichesInfoProps> = ({
  description,
  title
}) => (
  <div className="flex flex-col items-center gap-8 text-center">
    <div className="flex flex-col items-center gap-4 text-center">
      <h3 className="font-main text-2xl text-primary">{title}</h3>
      <p>{description}</p>
    </div>
    <Button
      asChild
      className="self-center"
    >
      <Link href={InternalLink.createSandwich}>Cook some sandwiches</Link>
    </Button>
  </div>
)
