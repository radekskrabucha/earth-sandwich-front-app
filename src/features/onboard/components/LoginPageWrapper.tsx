'use client'

import { useConnectWallet } from '@/hooks/useConnectWallet'
import { AlreadyConnected } from './AlreadyConnected'
import { WhatIsLukso } from './WhatIsLukso'

export const LoginPageWrapper = () => {
  const { injectedWallet, isLoading, address } = useConnectWallet()

  if (address) {
    return <AlreadyConnected address={address} />
  }

  return (
    <WhatIsLukso
      injectedWallet={injectedWallet}
      isLoading={isLoading}
    />
  )
}
