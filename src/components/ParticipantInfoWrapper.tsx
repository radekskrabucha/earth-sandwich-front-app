'use server'

import { readContract } from 'viem/actions'
import { EarthSandwichABI } from '@/abi/EarthSandwichABI'
import { viemClient } from '@/lib/viem'
import type { SandwichParticipant } from '@/models/sandwich'
import type { HexString } from '@/types/common'
import { client } from '@/utils/env'

type ParticipantInfoWrapperProps = {
  participantAddress: HexString
  sandwichId: HexString
  children(participant: SandwichParticipant): React.ReactNode
}

export const ParticipantInfoWrapper: React.FC<
  ParticipantInfoWrapperProps
> = async ({ participantAddress, children, sandwichId }) => {
  const [hasAccepted, metadata] = await readContract(viemClient, {
    abi: EarthSandwichABI,
    functionName: 'getSandwichParticipantDetails',
    args: [sandwichId, participantAddress],
    address: client.NEXT_PUBLIC_EARTH_SANDWICH_CONTRACT_ADDRESS as HexString
  })

  return (
    <>
      {children({
        hasAccepted,
        metadata
      })}
    </>
  )
}
