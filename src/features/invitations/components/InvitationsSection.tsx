import { readContract } from 'viem/actions'
import { EarthSandwichABI } from '@/abi/EarthSandwichABI'
import { SandwichInfoWrapper } from '@/features/sandwich/components/SandwichInfoWrapper'
import { viemClient } from '@/lib/viem'
import type { HexString } from '@/types/common'
import { client } from '@/utils/env'
import { NoInvitationsInfo } from './NoInvitationsInfo'
import { SandwichInvitationCard } from './SandwichInvitationsCard'

type InvitationsSectionProps = {
  address: HexString
}

export const InvitationsSection: React.FC<InvitationsSectionProps> = async ({
  address
}) => {
  const sandwichInvitations = await readContract(viemClient, {
    abi: EarthSandwichABI,
    functionName: 'getUnmintedSandwichesByParticipant',
    args: [address],
    address: client.NEXT_PUBLIC_EARTH_SANDWICH_CONTRACT_ADDRESS as HexString
  })

  return (
    <section className="layout-section gap-8">
      {sandwichInvitations?.length > 0 ? (
        <>
          <div className="flex flex-col items-center gap-4 text-center">
            <h3 className="font-main text-2xl text-primary">
              You have been invited to cook some sandwiches 👀
            </h3>
            <p>
              Check your invitations and cook some sandwiches and make the best
              sandwich memories!
            </p>
          </div>
          <div className="flex flex-col items-center gap-6">
            {sandwichInvitations.map(sandwichAddress => (
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
        <NoInvitationsInfo />
      )}
    </section>
  )
}
