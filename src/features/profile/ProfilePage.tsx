import { notFound } from 'next/navigation'
import { createIpfsLink } from '@/utils/images'
import { isEvmAddress } from '@/utils/regexes'
import { ProfileBanner } from './components'
import { getLSP3ProfileData } from './utils'

type ProfilePageParams = {
  address: string
}

type ProfilePageProps = {
  params: ProfilePageParams
}

export const ProfilePage: React.FC<ProfilePageProps> = async ({
  params: { address }
}) => {
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
          profile.profileImage && createIpfsLink(profile.profileImage?.[0].url)
        }
        background={
          profile.backgroundImage &&
          createIpfsLink(profile.backgroundImage[0].url)
        }
      />
    </>
  )
}
