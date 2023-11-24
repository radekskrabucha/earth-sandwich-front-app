import { readContract } from 'viem/actions'
import { EarthSandwichABI } from '@/abi/EarthSandwichABI'
import { SandwichMetadataInfoWrapper } from '@/components/SandwichMetadataInfoWrapper'
import type { ProfilePageProps } from '@/features/sandwich/types'
import { viemClient } from '@/lib/viem'
import type { HexString } from '@/types/common'
import { client } from '@/utils/env'
import { NoSandwichesInfo } from './components/NoSandwichesInfo'
import { SandwichCard } from './components/SandwichCard'

export const ProfileSandwichesParticipatedPage: React.FC<
  ProfilePageProps
> = async ({ params: { address } }) => {
  const [sandwiches, sandwichesMetadata] = await readContract(viemClient, {
    abi: EarthSandwichABI,
    functionName: 'getMintedSandwichesParticipatedWithMetadata',
    args: [address],
    address: client.NEXT_PUBLIC_EARTH_SANDWICH_CONTRACT_ADDRESS as HexString
  })

  return (
    <section className="layout-section">
      {sandwiches.length !== 0 ? (
        <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
          {sandwiches.map((sandwichId, index) => (
            <SandwichMetadataInfoWrapper
              ipfsHash={sandwichesMetadata[index] as string}
              key={sandwichId}
            >
              {sandwichMetadata => (
                <SandwichCard
                  sandwich={sandwichMetadata}
                  sandwichId={sandwichId}
                />
              )}
            </SandwichMetadataInfoWrapper>
          ))}
        </div>
      ) : (
        <NoSandwichesInfo
          title="No sandwiches here 😢"
          description="Booo!👎👎👎👎 Not participated in any sandwich yet. This user is not a sandwich lover."
        />
      )}
    </section>
  )
}
