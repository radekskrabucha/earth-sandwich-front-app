'use client'

import { Button } from '@/components/Button'
import { LoaderCircle } from '@/components/LoaderCircle'
import type { Wallet } from '@/hooks/useConnectWallet'

type ConnectWalletProps = {
  injectedWallet: Wallet
  isLoading: boolean
}

export const ConnectWallet: React.FC<ConnectWalletProps> = ({
  injectedWallet,
  isLoading
}) => (
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
