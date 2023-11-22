'use server'

import { readContract } from 'viem/actions'
import { EarthSandwichABI } from '@/abi/EarthSandwichABI'
import { viemClient } from '@/lib/viem'
import type { SandwichRaw } from '@/models/sandwich'
import type { HexString } from '@/types/common'
import { client } from '@/utils/env'

type SandwichInfoWrapperProps = {
  address: HexString
  children(sandwich: SandwichRaw): React.ReactNode
}

export const SandwichInfoWrapper: React.FC<SandwichInfoWrapperProps> = async ({
  address,
  children
}) => {
  const [name, owner, isFinalized, participantAddresses, participantMetadata] =
    await readContract(viemClient, {
      abi: EarthSandwichABI,
      functionName: 'getSandwichDetails',
      args: [address],
      address: client.NEXT_PUBLIC_EARTH_SANDWICH_CONTRACT_ADDRESS as HexString
    })

  return (
    <>
      {children({
        name,
        owner,
        isFinalized,
        participantAddresses,
        participantMetadata
      })}
    </>
  )
}
