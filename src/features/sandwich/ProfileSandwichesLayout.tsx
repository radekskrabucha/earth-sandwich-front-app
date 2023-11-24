import { notFound } from 'next/navigation'
import { Button } from '@/components/Button'
import { Link } from '@/components/Link'
import { ProfileInfoWrapper } from '@/components/ProfileInfoWrapper'
import { RestrictedProfileWrapper } from '@/components/RestrictedProfileWrapper'
import { InternalLink } from '@/config/app'
import type { ProfilePageProps } from '@/features/sandwich/types'
import { isEvmAddress } from '@/utils/regexes'
import { ProfileBanner } from './components/ProfileBanner'
import { ProfileTab } from './components/ProfileTab'
import { ProfileTabs } from './components/ProfileTabs'
import { UserMeTabs } from './components/UserMeTabs'

export const ProfileSandwichesLayout: React.FC<
  React.PropsWithChildren<ProfilePageProps>
> = ({ params: { address }, children }) => {
  if (!isEvmAddress(address)) {
    notFound()
  }

  return (
    <ProfileInfoWrapper address={address}>
      {profile =>
        profile ? (
          <>
            <ProfileBanner
              description={profile.description}
              name={profile.name}
              avatar={profile.profileImageUrl}
              background={profile.backgroundImageUrl}
            />
            <ProfileTabs>
              <ProfileTab
                name="cooked"
                href={InternalLink.profile(address, '/sandwiches')}
              />
              <ProfileTab
                name="participated"
                href={InternalLink.profile(address, '/sandwiches/participated')}
              />
              <UserMeTabs address={address} />
            </ProfileTabs>

            <section className="layout-section">
              <div className="flex items-center justify-between gap-4">
                <RestrictedProfileWrapper
                  pushTo={undefined}
                  address={address}
                  shouldMatchAddress
                >
                  <Button
                    asChild
                    variant="link"
                    className="text-primary"
                  >
                    <Link
                      href={InternalLink.profile(
                        address,
                        '/sandwiches/pending'
                      )}
                    >
                      pending sandwiches
                    </Link>
                  </Button>
                </RestrictedProfileWrapper>
                <Button asChild>
                  <Link
                    href={InternalLink.createSandwich}
                    className="ml-auto"
                  >
                    <span className="text-2xl leading-none">+</span> create
                    sandwich
                  </Link>
                </Button>
              </div>
            </section>
            {children}
          </>
        ) : (
          notFound()
        )
      }
    </ProfileInfoWrapper>
  )
}
