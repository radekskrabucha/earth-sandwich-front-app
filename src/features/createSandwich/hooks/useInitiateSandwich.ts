import { hashMessage } from 'viem'
import { useAccount, useContractWrite } from 'wagmi'
import { EarthSandwichABI } from '@/abi/EarthSandwichABI'
import { luksoTestnet } from '@/lib/walletChains'
import type { HexString } from '@/types/common'
import { getDateNowISOString } from '@/utils/date'
import { client } from '@/utils/env'
import { getErrorMessage } from '@/utils/error'

type InitiateSandwichArgs = {
  name: string
  participants: Array<HexString>
}

export const useInitiateSandwich = () => {
  const { address } = useAccount()
  const { isLoading, error, write } = useContractWrite({
    abi: EarthSandwichABI,
    address: client.NEXT_PUBLIC_EARTH_SANDWICH_CONTRACT_ADDRESS as HexString,
    functionName: 'initiateSandwich',
    chainId: luksoTestnet.id
  })

  return {
    initiateSandwich: ({ name, participants }: InitiateSandwichArgs) =>
      write({
        args: [
          name,
          hashMessage(`${name}-${address}-${getDateNowISOString()}`),
          participants
        ]
      }),
    isLoading,
    errorMessage: error ? getErrorMessage({ error }) : undefined
  }
}
