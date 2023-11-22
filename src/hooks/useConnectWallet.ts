import { useConnect, useAccount } from 'wagmi'
import { injectedConnector } from '@/lib/wallet'
import { nonNullable } from '@/utils/common'

export type Wallet = {
  id: string
  name: string
  connect: () => void
  isConnected: boolean
  isLoading: boolean
  isDisabled: boolean
}

export const useConnectWallet = () => {
  const { connector: connectedConnector, address } = useAccount()
  const { connect, pendingConnector, error, isLoading } = useConnect()

  const injectedWallet: Wallet = {
    id: injectedConnector.id,
    name: injectedConnector.name,
    connect: () => connect({ connector: injectedConnector }),
    isConnected:
      nonNullable(connectedConnector) &&
      connectedConnector.id === injectedConnector.id,
    isLoading: isLoading && injectedConnector.id === pendingConnector?.id,
    isDisabled: !injectedConnector.ready
  }

  return {
    injectedWallet,
    address,
    isLoading,
    error,
    isConnected: Boolean(address)
  }
}
