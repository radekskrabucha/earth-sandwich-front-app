import { WagmiConfig } from 'wagmi'
import { wagmiConfig } from '@/lib/wallet'

export const WalletProvider: React.FC<React.PropsWithChildren> = ({
  children
}) => <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>
