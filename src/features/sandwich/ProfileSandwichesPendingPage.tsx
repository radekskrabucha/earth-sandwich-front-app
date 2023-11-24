import { readContract } from 'viem/actions'
import { EarthSandwichABI } from '@/abi/EarthSandwichABI'
import { SandwichInvitationCard } from '@/features/invitations/components/SandwichInvitationsCard'
import type { ProfilePageProps } from '@/features/sandwich/types'
import { viemClient } from '@/lib/viem'
import type { HexString } from '@/types/common'
import { client } from '@/utils/env'
import { NoPendingSandwichesInfo } from './components/NoPendingSandiwchesInfo'
import { SandwichInfoWrapper } from './components/SandwichInfoWrapper'

export const ProfileSandwichesPendingPage: React.FC<ProfilePageProps> = async ({
  params: { address }
}) => {
  const sandwiches = await readContract(viemClient, {
    abi: EarthSandwichABI,
    functionName: 'getUnmintedSandwichesByOwner',
    args: [address],
    address: client.NEXT_PUBLIC_EARTH_SANDWICH_CONTRACT_ADDRESS as HexString
  })

  return (
    <section className="layout-section gap-8">
      {sandwiches?.length > 0 ? (
        <>
          <div className="flex flex-col items-center gap-4 text-center">
            <h3 className="font-main text-2xl text-primary">
              Someone cooked here 👀
            </h3>
            <p>
              Check your pending sandwiches, cook some and make the best
              sandwich memories!
            </p>
          </div>
          <div className="flex flex-col items-center gap-6">
            {sandwiches.map(sandwichAddress => (
              <SandwichInfoWrapper
                key={sandwichAddress}
                address={sandwichAddress}
              >
                {sandwich => (
                  <SandwichInvitationCard
                    {...sandwich}
                    sandwichAddress={sandwichAddress}
                  />
                )}
              </SandwichInfoWrapper>
            ))}
          </div>
        </>
      ) : (
        <NoPendingSandwichesInfo />
      )}
    </section>
  )
}
