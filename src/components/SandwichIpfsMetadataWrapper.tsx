import { readContract } from 'viem/actions'
import { EarthSandwichABI } from '@/abi/EarthSandwichABI'
import { viemClient } from '@/lib/viem'
import type { HexString } from '@/types/common'
import { client } from '@/utils/env'

type SandwichIpfsMetadataWrapperProps = {
  sandwichId: HexString
  children: (metadataHash: string) => React.ReactNode
}

export const SandwichIpfsMetadataWrapper: React.FC<
  SandwichIpfsMetadataWrapperProps
> = async ({ sandwichId, children }) => {
  const metadataHash = await readContract(viemClient, {
    abi: EarthSandwichABI,
    functionName: 'getSandwichMetadata',
    args: [sandwichId],
    address: client.NEXT_PUBLIC_EARTH_SANDWICH_CONTRACT_ADDRESS as HexString
  })

  return <>{children(metadataHash)}</>
}
