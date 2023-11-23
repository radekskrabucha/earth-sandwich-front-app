'use server'

import type { UPProfile } from '@/models/profile'
import type { HexString } from '@/types/common'
import { createIpfsLink } from '@/utils/ipfs'
import { getLSP3ProfileData } from '@/utils/profile'

type ProfileInfoWrapperProps = {
  address: HexString
  children(profile?: UPProfile): React.ReactNode
}

export const ProfileInfoWrapper: React.FC<ProfileInfoWrapperProps> = async ({
  address,
  children
}) => {
  const profile = await getLSP3ProfileData(address)

  return (
    <>
      {children(
        profile
          ? {
              description: profile.description,
              name: profile.name,
              backgroundImageUrl:
                profile.backgroundImage &&
                profile.backgroundImage[0] &&
                createIpfsLink(profile.backgroundImage[0].url),
              profileImageUrl:
                profile.profileImage &&
                profile.profileImage[0] &&
                createIpfsLink(profile.profileImage?.[0].url)
            }
          : undefined
      )}
    </>
  )
}
