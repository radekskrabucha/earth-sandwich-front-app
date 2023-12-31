import { useContractWrite } from 'wagmi'
import { EarthSandwichABI } from '@/abi/EarthSandwichABI'
import { luksoTestnet } from '@/lib/walletChains'
import type { HexString } from '@/types/common'
import { client } from '@/utils/env'
import { getErrorMessage } from '@/utils/error'

type InitiateSandwichArgs = {
  name: string
  participants: Array<HexString>
}

export const useInitiateSandwich = () => {
  const { isLoading, error, write, isSuccess, data } = useContractWrite({
    abi: EarthSandwichABI,
    address: client.NEXT_PUBLIC_EARTH_SANDWICH_CONTRACT_ADDRESS as HexString,
    functionName: 'initiateSandwich',
    chainId: luksoTestnet.id
  })

  return {
    initiateSandwich: ({ name, participants }: InitiateSandwichArgs) =>
      write({
        args: [name, participants]
      }),
    isLoading,
    errorMessage: error ? getErrorMessage({ error }) : undefined,
    isSuccess,
    data
  }
}
