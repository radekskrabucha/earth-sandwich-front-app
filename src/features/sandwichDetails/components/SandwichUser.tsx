import { Avatar, type AvatarProps } from '@/components/Avatar'
import { Link } from '@/components/Link'
import { InternalLink } from '@/config/app'
import type { HexString } from '@/types/common'

type SandwichUserProps = {
  name: React.ReactNode
  label?: React.ReactNode
  avatar: AvatarProps
  address: HexString
}

export const SandwichUser: React.FC<SandwichUserProps> = ({
  name,
  avatar,
  label,
  address
}) => (
  <div className="flex flex-col items-center gap-6">
    <Link href={InternalLink.profile(address, '')}>
      <Avatar {...avatar} />
    </Link>
    <div className="flex flex-col items-center gap-1">
      {label && (
        <span className="text-sm capitalize text-white/50">{label}</span>
      )}
      <Link href={InternalLink.profile(address, '')}>
        <h3 className="font-main text-xl text-secondary">{name}</h3>
      </Link>
    </div>
  </div>
)
