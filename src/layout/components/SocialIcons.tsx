import { Icon } from '@/components/Icon'
import { Link } from '@/components/Link'
import { ExternalLink } from '@/config/app'
import { cn } from '@/utils/styles'

type SocialIconsProps = {
  iconClassName?: string
}

export const SocialIcons: React.FC<SocialIconsProps> = ({ iconClassName }) => (
  <div className="flex items-center gap-3 text-gray-500">
    <Link
      href={ExternalLink.github}
      aria-label="Github"
    >
      <Icon
        id="github"
        className={cn(
          'h-6 w-6 fill-current transition-colors duration-150 hover:text-gray-300',
          iconClassName
        )}
      />
    </Link>
    <Link
      href={ExternalLink.twitter}
      aria-label="Twitter"
    >
      <Icon
        id="twitter"
        className={cn(
          'h-6 w-6 fill-current transition-colors duration-150 hover:text-gray-300',
          iconClassName
        )}
      />
    </Link>
    <Link
      href={ExternalLink.linkedin}
      aria-label="LinkedIn"
    >
      <Icon
        id="linkedin"
        className={cn(
          'h-6 w-6 fill-current transition-colors duration-150 hover:text-gray-300',
          iconClassName
        )}
      />
    </Link>
  </div>
)
