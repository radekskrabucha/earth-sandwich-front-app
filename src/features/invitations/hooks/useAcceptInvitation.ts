import { useContractWrite } from 'wagmi'
import { EarthSandwichABI } from '@/abi/EarthSandwichABI'
import { luksoTestnet } from '@/lib/walletChains'
import type { HexString } from '@/types/common'
import { client } from '@/utils/env'
import { getErrorMessage } from '@/utils/error'

type AcceptInvitationArgs = {
  id: HexString
  location: string
  image?: File
}

export const useAcceptInvitation = () => {
  const { isLoading, error, isSuccess, data } = useContractWrite({
    abi: EarthSandwichABI,
    address: client.NEXT_PUBLIC_EARTH_SANDWICH_CONTRACT_ADDRESS as HexString,
    functionName: 'acceptInvitation',
    chainId: luksoTestnet.id
  })

  return {
    isLoading,
    errorMessage: error ? getErrorMessage({ error }) : undefined,
    isSuccess,
    data,
    acceptInvitation: ({ id, location, image }: AcceptInvitationArgs) => {
      console.log('acceptInvitation', { id, location, image })

      return
    }
  }
}
