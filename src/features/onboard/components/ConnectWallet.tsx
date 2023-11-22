'use client'

import { Button } from '@/components/Button'
import { LoaderCircle } from '@/components/LoaderCircle'
import { useConnectWallet } from '@/hooks/useConnectWallet'

export const ConnectWallet = () => {
  const { injectedWallet, isLoading } = useConnectWallet()

  return (
    <Button
      onClick={() => !injectedWallet.isConnected && injectedWallet.connect()}
      disabled={
        injectedWallet.isDisabled || injectedWallet.isLoading || isLoading
      }
      className="self-center"
    >
      {injectedWallet.isLoading && <LoaderCircle />}
      {injectedWallet.isConnected ? 'connected' : 'connect'}
    </Button>
  )
}
