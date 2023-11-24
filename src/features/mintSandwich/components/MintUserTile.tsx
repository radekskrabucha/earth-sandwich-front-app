import { Avatar } from '@/components/Avatar'
import { IconWrapper } from '@/components/IconWrapper'
import { Image } from '@/components/Image'
import { ProfileInfoWrapper } from '@/components/ProfileInfoWrapper'
import type { SandwichParticipantMetadata } from '@/models/sandwich'
import { formatToDateWithTime } from '@/utils/date'
import { createIpfsLink } from '@/utils/ipfs'
import { shortenAddress } from '@/utils/textUtils'

export const MintUserTile: React.FC<SandwichParticipantMetadata> = ({
  address,
  timestamp,
  imageIPFSHash
}) => (
  <ProfileInfoWrapper address={address}>
    {profile => (
      <IconWrapper className="relative h-36 w-36 overflow-hidden rounded-3xl border-2 border-primary bg-white/10">
        {imageIPFSHash && (
          <Image
            src={createIpfsLink(imageIPFSHash)}
            alt={profile?.name || ''}
            fill
            className="object-cover object-center"
          />
        )}
        <div className="z-10 flex w-full items-center gap-1.5 self-end bg-black/80 p-2">
          <Avatar
            src={profile?.profileImageUrl}
            avatarProps={{
              alt: profile?.name || ''
            }}
            className="h-5 w-5"
          />
          <div className="text-xs leading-tight">
            <h4 className="line-clamp-1 text-secondary">
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
