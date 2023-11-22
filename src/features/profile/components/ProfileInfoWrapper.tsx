'use server'

import type { UPProfile } from '@/models/profile'
import type { HexString } from '@/types/common'
import { getLSP3ProfileData } from '../utils'

type ProfileInfoWrapperProps = {
  address: HexString
  children(profile?: UPProfile): React.ReactNode
}

export const ProfileInfoWrapper: React.FC<ProfileInfoWrapperProps> = async ({
  address,
  children
}) => {
  const profile = await getLSP3ProfileData(address)

  return <>{children(profile)}</>
}
