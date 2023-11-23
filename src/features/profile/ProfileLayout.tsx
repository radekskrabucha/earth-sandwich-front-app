import { notFound } from 'next/navigation'
import { ProfileInfoWrapper } from '@/components/ProfileInfoWrapper'
import { InternalLink } from '@/config/app'
import { isEvmAddress } from '@/utils/regexes'
import { ProfileBanner } from './components/ProfileBanner'
import { ProfileTab } from './components/ProfileTab'
import { ProfileTabs } from './components/ProfileTabs'
import { UserMeTabs } from './components/UserMeTabs'
import { type ProfilePageProps } from './types'

export const ProfileLayout: React.FC<
  React.PropsWithChildren<ProfilePageProps>
> = ({ children, params: { address } }) => {
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
                name="profile"
                href={InternalLink.profile(address, '')}
              />
              <ProfileTab
                name="sandwiches"
                href={InternalLink.profile(address, '/sandwiches')}
              />
              <UserMeTabs address={address} />
            </ProfileTabs>
            {children}
          </>
        ) : (
          notFound()
        )
      }
    </ProfileInfoWrapper>
  )
}
