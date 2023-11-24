import { useContractWrite } from 'wagmi'
import { EarthSandwichABI } from '@/abi/EarthSandwichABI'
import { luksoTestnet } from '@/lib/walletChains'
import type { HexString } from '@/types/common'
import { client } from '@/utils/env'
import { getErrorMessage } from '@/utils/error'

type MintSandwichArgs = {
  sandwichId: HexString
  metadataIPFSHash: string
}

type UseMintSandwichArgs = {
  onSuccess?: (txHash: HexString) => void
}

export const useMintSandwich = ({ onSuccess }: UseMintSandwichArgs) => {
  const { isLoading, error, isSuccess, data, write } = useContractWrite({
    abi: EarthSandwichABI,
    address: client.NEXT_PUBLIC_EARTH_SANDWICH_CONTRACT_ADDRESS as HexString,
    functionName: 'finalizeAndMint',
    chainId: luksoTestnet.id,
    onSuccess: data => {
      onSuccess?.(data.hash)
    }
  })

  return {
    isLoading,
    errorMessage: error ? getErrorMessage({ error }) : undefined,
    isSuccess,
    data,
    mintSandwich: ({ sandwichId, metadataIPFSHash }: MintSandwichArgs) => {
      write({
        args: [sandwichId, metadataIPFSHash]
      })
    }
  }
}
