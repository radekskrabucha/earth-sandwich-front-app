import { createPublicClient, http } from 'viem'
import { luksoTestnet } from './walletChains'

export const viemClient = createPublicClient({
  chain: luksoTestnet,
  transport: http()
})
