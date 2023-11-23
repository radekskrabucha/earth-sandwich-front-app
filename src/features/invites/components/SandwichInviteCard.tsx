import { Avatar } from '@/components/Avatar'
import { Button } from '@/components/Button'
import { IconWrapper } from '@/components/IconWrapper'
import { Link } from '@/components/Link'
import { ProfileInfoWrapper } from '@/components/ProfileInfoWrapper'
import { InternalLink } from '@/config/app'
import type { SandwichRaw } from '@/models/sandwich'
import type { HexString } from '@/types/common'

type SandwichInviteCardProps = {
  sandwichAddress: HexString
} & SandwichRaw

export const SandwichInviteCard: React.FC<SandwichInviteCardProps> = ({
  name,
  owner,
  participantAddresses,
  sandwichAddress
}) => (
  <Link
    href={InternalLink.sandwichDetails(sandwichAddress, '')}
    className="flex w-full max-w-sm flex-col gap-4 rounded-xl border-2 border-primary bg-secondary p-6 text-background"
  >
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h3 className="font-main font-bold">{name}</h3>
        <ProfileInfoWrapper address={owner}>
          {profile =>
            profile ? (
              <div className="flex items-center gap-2">
                <Avatar
                  src={profile.profileImageUrl}
                  className="h-10 w-10"
                />
                <p className="text-white">{profile.name}</p>
              </div>
            ) : null
          }
        </ProfileInfoWrapper>
      </div>

      <div className="flex items-center justify-between gap-4">
        <div className="flex">
          {participantAddresses.map((address, index) => (
            <ProfileInfoWrapper
              key={address}
              address={address}
            >
              {profile =>
                profile && index < 3 ? (
                  <Avatar
                    src={profile.profileImageUrl}
                    className="-ml-4 h-7 w-7 first:ml-0"
                  />
                ) : null
              }
            </ProfileInfoWrapper>
          ))}
          {participantAddresses.length > 3 && (
            <IconWrapper className="z-10 -ml-4 h-7 w-7 border border-primary bg-background text-xs text-white first:ml-0">
              +{participantAddresses.length - 3}
            </IconWrapper>
          )}
        </div>

        <Button
          asChild
          className="bg-background hover:bg-background-400"
        >
          <span>Cook it!</span>
        </Button>
      </div>
    </div>
  </Link>
)
