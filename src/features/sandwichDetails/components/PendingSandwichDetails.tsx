import { ProfileInfoWrapper } from '@/components/ProfileInfoWrapper'
import { RestrictedProfileWrapper } from '@/components/RestrictedProfileWrapper'
import { InternalLink } from '@/config/app'
import type { SandwichRaw } from '@/models/sandwich'
import { SandwichUser } from './SandwichUser'

export const PendingSandwichDetails: React.FC<SandwichRaw> = ({
  owner,
  name,
  participantAddresses
}) => (
  <RestrictedProfileWrapper
    pushTo={InternalLink.profile(owner, '')}
    shouldBeConnected
  >
    <section className="layout-section items-center gap-16 text-center">
      <div className="flex flex-col gap-2">
        <span className="text-sm text-white/50">Sandwich name</span>
        <h3 className="font-main text-3xl font-bold text-primary">{name}</h3>
      </div>

      <ProfileInfoWrapper address={owner}>
        {profile =>
          profile ? (
            <SandwichUser
              avatar={{
                src: profile.profileImageUrl,
                className: 'border-4 border-primary h-48 w-48',
                avatarProps: {
                  alt: profile.name
                }
              }}
              name={<span className="text-primary">{profile.name}</span>}
              label="chef"
              address={owner}
            />
          ) : null
        }
      </ProfileInfoWrapper>

      <div className="flex flex-col gap-8">
        <span className="text-sm text-white/50">Sandwich participants</span>
        <div className="flex flex-row flex-wrap items-center justify-center gap-8">
          {participantAddresses.map(address => (
            <ProfileInfoWrapper
              key={address}
              address={address}
            >
              {profile =>
                profile ? (
                  <SandwichUser
                    avatar={{
                      src: profile.profileImageUrl,
                      className: 'border-4 border-white/30 h-32 w-32',
                      avatarProps: {
                        alt: profile.name
                      }
                    }}
                    name={profile.name}
                    address={address}
                    label="pending"
                  />
                ) : null
              }
            </ProfileInfoWrapper>
          ))}
        </div>
      </div>

      <p className="max-w-md text-white/50">
        This sandwich is not finalized yet. You can see the participants below.
        If you are one of them, you can accept the sandwich invitation by
        clicking the{' '}
        <strong className="font-bold text-white">Accept button</strong> below.
        <br />
        <br />
        If you are the owner of this sandwich, you can finalize it by clicking
        the <strong className="font-bold text-white">Cook button</strong> below.
      </p>
    </section>
  </RestrictedProfileWrapper>
)
