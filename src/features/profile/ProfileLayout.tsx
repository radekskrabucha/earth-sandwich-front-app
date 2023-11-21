import { notFound } from 'next/navigation'
import { createIpfsLink } from '@/utils/images'
import { isEvmAddress } from '@/utils/regexes'
import { ProfileBanner } from './components/ProfileBanner'
import { ProfileTab } from './components/ProfileTab'
import { ProfileTabs } from './components/ProfileTabs'
import { type ProfilePageProps } from './types'
import { getLSP3ProfileData } from './utils'

export const ProfileLayout: React.FC<
  React.PropsWithChildren<ProfilePageProps>
> = async ({ children, params: { address } }) => {
  if (!isEvmAddress(address)) {
    notFound()
  }

  const profile = await getLSP3ProfileData(address)

  if (!profile) {
    notFound()
  }

  return (
    <>
      <ProfileBanner
        description={profile.description}
        name={profile.name}
        avatar={
          profile.profileImage &&
          profile.profileImage[0] &&
          createIpfsLink(profile.profileImage?.[0].url)
        }
        background={
          profile.backgroundImage &&
          profile.backgroundImage[0] &&
          createIpfsLink(profile.backgroundImage[0].url)
        }
      />
      <ProfileTabs>
        <ProfileTab
          name="profile"
          segment=""
          address={address}
        />
        <ProfileTab
          name="sandwiches"
          segment="sandwiches"
          address={address}
        />
      </ProfileTabs>
      {children}
    </>
  )
}
