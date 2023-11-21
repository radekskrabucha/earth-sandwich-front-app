import { type Chain } from 'viem/chains'
import { client } from '@/utils/env'

export const luksoTestnet = {
  id: 22,
  name: 'Lukso Testnet',
  network: 'lukso',
  nativeCurrency: {
    decimals: 18,
    name: 'Lukso',
    symbol: 'LYXt'
  },
  rpcUrls: {
    public: { http: [client.NEXT_PUBLIC_LUKSO_RPC_URL] },
    default: { http: [client.NEXT_PUBLIC_LUKSO_RPC_URL] }
  },
  blockExplorers: {
    default: {
      name: 'Lukso Explorer',
      url: client.NEXT_PUBLIC_LUKSO_EXPLORER_URL
    }
  }
} as const satisfies Chain

export const configChains = [luksoTestnet]
