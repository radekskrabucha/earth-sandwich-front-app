'use client'

import type React from 'react'
import { useAccountWithRouter } from '@/hooks/useAccountWithRouter'
import type { HexString, Undefinable } from '@/types/common'
import { getIsWindowLocationDefined } from '@/utils/common'

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
  pushTo: Undefinable<string>
  shouldPassCondition?: boolean
} & ConditionalProfileWrapperProps

export const RestrictedProfileWrapper: React.FC<
  React.PropsWithChildren<RestrictedProfileWrapperProps>
> = ({
  address,
  children,
  pushTo,
  shouldBeConnected,
  shouldMatchAddress,
  shouldPassCondition
}) => {
  const {
    getIsUserAccount,
    push,
    address: walletAddress
  } = useAccountWithRouter()

  if (shouldPassCondition) {
    return children
  }
  if (
    shouldMatchAddress &&
    getIsWindowLocationDefined() &&
    !getIsUserAccount(address)
  ) {
    pushTo && push(pushTo)

    return null
  }
  if (shouldBeConnected && getIsWindowLocationDefined() && !walletAddress) {
    pushTo && push(pushTo)

    return null
  }

  return children
}
