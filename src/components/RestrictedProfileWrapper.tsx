'use client'

import type React from 'react'
import { useAccountWithRouter } from '@/hooks/useAccountWithRouter'
import type { HexString } from '@/types/common'
import { nonNullable } from '@/utils/common'

type ConditionalProfileWrapperProps =
  | {
      address: HexString
      shouldMatchAddress: true
      shouldBeConnected?: never
    }
  | {
      address?: never
      shouldMatchAddress?: never
      shouldBeConnected: true
    }

type RestrictedProfileWrapperProps = {
  pushTo: string
} & ConditionalProfileWrapperProps

export const RestrictedProfileWrapper: React.FC<
  React.PropsWithChildren<RestrictedProfileWrapperProps>
> = ({ address, children, pushTo, shouldBeConnected, shouldMatchAddress }) => {
  const {
    getIsUserAccount,
    push,
    address: walletAddress
  } = useAccountWithRouter()

  if (shouldMatchAddress && !getIsUserAccount(address)) {
    push(pushTo)

    return null
  }
  if (
    typeof window !== 'undefined' &&
    nonNullable(window.location) &&
    shouldBeConnected &&
    !walletAddress
  ) {
    push(pushTo)

    return null
  }

  return children
}
