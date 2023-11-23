import { useContractWrite } from 'wagmi'
import { EarthSandwichABI } from '@/abi/EarthSandwichABI'
import { luksoTestnet } from '@/lib/walletChains'
import type { HexString } from '@/types/common'
import { client } from '@/utils/env'
import { getErrorMessage } from '@/utils/error'

type AcceptInvitationArgs = {
  sandwichId: HexString
  metadataIPFSHash: string
}

type UseAcceptInvitationArgs = {
  onSuccess?: (txHash: HexString) => void
}

export const useAcceptInvitation = ({ onSuccess }: UseAcceptInvitationArgs) => {
  const { isLoading, error, isSuccess, data, write } = useContractWrite({
    abi: EarthSandwichABI,
    address: client.NEXT_PUBLIC_EARTH_SANDWICH_CONTRACT_ADDRESS as HexString,
    functionName: 'acceptInvitation',
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
    acceptInvitation: ({
      sandwichId,
      metadataIPFSHash
    }: AcceptInvitationArgs) => {
      console.log('accepted Invitation!!', { sandwichId, metadataIPFSHash })

      return

      return write({
        args: [sandwichId, metadataIPFSHash]
      })
    }
  }
}
