import { Avatar } from '@/components/Avatar'
import { IconWrapper } from '@/components/IconWrapper'
import { Image } from '@/components/Image'
import { Link } from '@/components/Link'
import { ProfileInfoWrapper } from '@/components/ProfileInfoWrapper'
import { UserMetadataInfoWrapper } from '@/components/UserMetadataInfoWrapper'
import { InternalLink } from '@/config/app'
import type { SandwichMetadata } from '@/models/sandwich'
import type { HexString } from '@/types/common'
import { createIpfsLink } from '@/utils/ipfs'

type SandwichCardProps = {
  sandwich: SandwichMetadata
  sandwichId: HexString
}

export const SandwichCard: React.FC<SandwichCardProps> = ({
  sandwichId,
  sandwich: { title, description, ownerMetadata, participantsMetadataHashes }
}) => (
  <Link
    href={InternalLink.sandwichDetails(sandwichId, '')}
    className="relative flex aspect-square flex-col justify-end overflow-hidden rounded-3xl border-2 border-primary bg-white/10 shadow-lg"
  >
    {ownerMetadata.imageIPFSHash && (
      <Image
        src={createIpfsLink(ownerMetadata.imageIPFSHash)}
        alt=""
        fill
        className="object-cover object-center"
      />
    )}
    <div className="z-10 flex flex-col gap-6 justify-self-end bg-black/70 p-4 max-sm:gap-4">
      <ProfileInfoWrapper address={ownerMetadata.address}>
        {profile => (
          <div className="flex items-center gap-2">
            <Avatar
              src={profile?.profileImageUrl}
              avatarProps={{
                alt: profile?.name || ''
              }}
              className="h-7 w-7"
            />
            <h4 className="line-clamp-1 text-white/50">
              {profile?.name || ownerMetadata.address}
            </h4>
          </div>
        )}
      </ProfileInfoWrapper>
      <div className="flex flex-col gap-2">
        <h3 className="line-clamp-1 font-main text-2xl text-primary">
          {title}
        </h3>
        <p className="text-white/50">{description}</p>
      </div>
      <div className="flex">
        {participantsMetadataHashes.map((ipfsHash, index) => (
          <UserMetadataInfoWrapper
            key={ipfsHash}
            ipfsHash={ipfsHash}
          >
            {({ address }) => (
              <ProfileInfoWrapper address={address}>
                {profile =>
                  profile && index < 3 ? (
                    <Avatar
                      src={profile.profileImageUrl}
                      className="-ml-4 h-7 w-7 first:ml-0"
                    />
                  ) : null
                }
              </ProfileInfoWrapper>
            )}
          </UserMetadataInfoWrapper>
        ))}
        {participantsMetadataHashes.length > 3 && (
          <IconWrapper className="z-10 -ml-4 h-7 w-7 border border-primary bg-background text-xs text-white first:ml-0">
            +{participantsMetadataHashes.length - 3}
          </IconWrapper>
        )}
      </div>
    </div>
  </Link>
)
