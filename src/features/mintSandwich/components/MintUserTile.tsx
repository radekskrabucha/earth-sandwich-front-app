import { Avatar } from '@/components/Avatar'
import { IconWrapper } from '@/components/IconWrapper'
import { Image } from '@/components/Image'
import { Link } from '@/components/Link'
import { ProfileInfoWrapper } from '@/components/ProfileInfoWrapper'
import { InternalLink } from '@/config/app'
import type { SandwichParticipantMetadata } from '@/models/sandwich'
import type { WithClassName } from '@/types/common'
import { formatToDateWithTime } from '@/utils/date'
import { createIpfsLink } from '@/utils/ipfs'
import { cn } from '@/utils/styles'
import { shortenAddress } from '@/utils/textUtils'

export const MintUserTile: React.FC<
  WithClassName<SandwichParticipantMetadata>
> = ({ address, timestamp, imageIPFSHash, className }) => (
  <ProfileInfoWrapper address={address}>
    {profile => (
      <IconWrapper
        className={cn(
          'relative h-36 w-36 overflow-hidden rounded-3xl border-2 border-primary bg-white/10 text-left text-secondary',
          className
        )}
      >
        {imageIPFSHash && (
          <Image
            src={createIpfsLink(imageIPFSHash)}
            alt={profile?.name || ''}
            fill
            className="object-cover object-center"
          />
        )}
        <div className="z-10 flex w-full items-center gap-1.5 self-end bg-black/80 p-2">
          <Link href={InternalLink.profile(address, '/sandwiches')}>
            <Avatar
              src={profile?.profileImageUrl}
              avatarProps={{
                alt: profile?.name || ''
              }}
              className="h-5 w-5"
            />
          </Link>
          <div className="text-xs leading-tight">
            <h4 className="line-clamp-1">
              {profile?.name || shortenAddress(address)}
            </h4>
            <h4 className="line-clamp-1 text-[10px] text-white/50">
              {formatToDateWithTime(timestamp)}
            </h4>
          </div>
        </div>
      </IconWrapper>
    )}
  </ProfileInfoWrapper>
)
