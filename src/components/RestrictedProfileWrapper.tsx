'use client'

import type React from 'react'
import { useAccountWithRouter } from '@/hooks/useAccountWithRouter'
import type { HexString } from '@/types/common'

type RestrictedProfileWrapperProps = {
  address: HexString
  pushTo: string
}

export const RestrictedProfileWrapper: React.FC<
  React.PropsWithChildren<RestrictedProfileWrapperProps>
> = ({ address, children, pushTo }) => {
  const { getIsUserAccount, push } = useAccountWithRouter()

  if (!getIsUserAccount(address)) {
    push(pushTo)

    return null
  }

  return children
}
