'use client'

import { configureChains, createConfig } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { publicProvider } from 'wagmi/providers/public'
import { configChains } from './walletChains'

const { chains, publicClient, webSocketPublicClient } = configureChains(
  configChains,
  [publicProvider()]
)

export const injectedConnector = new InjectedConnector({
  chains,
  options: { name: 'UP browser extension' }
})

export const wagmiConfig = createConfig({
  autoConnect: false,
  publicClient,
  webSocketPublicClient,
  connectors: [injectedConnector]
})

export { chains }
