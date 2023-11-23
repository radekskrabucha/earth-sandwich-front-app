import { readContract } from 'viem/actions'
import { EarthSandwichABI } from '@/abi/EarthSandwichABI'
import { SandwichInfoWrapper } from '@/features/sandwich/components/SandwichInfoWrapper'
import { viemClient } from '@/lib/viem'
import type { HexString } from '@/types/common'
import { client } from '@/utils/env'
import { NoInvitesInfo } from './NoInvitesInfo'
import { SandwichInviteCard } from './SandwichInviteCard'

type InvitesSectionProps = {
  address: HexString
}

export const InvitesSection: React.FC<InvitesSectionProps> = async ({
  address
}) => {
  const sandwichInvites = await readContract(viemClient, {
    abi: EarthSandwichABI,
    functionName: 'getUnmintedSandwichesByParticipant',
    args: [address],
    address: client.NEXT_PUBLIC_EARTH_SANDWICH_CONTRACT_ADDRESS as HexString
  })

  return (
    <section className="layout-section gap-8">
      {sandwichInvites?.length > 0 ? (
        <>
          <div className="flex flex-col items-center gap-4 text-center">
            <h3 className="font-main text-2xl text-primary">
              You have been invited to cook some sandwiches 👀
            </h3>
            <p>
              Check your invites and cook some sandwiches and make the best
              sandwich memories!
            </p>
          </div>
          <div className="flex flex-col items-center gap-6">
            {sandwichInvites.map(sandwichAddress => (
              <SandwichInfoWrapper
                key={sandwichAddress}
                address={sandwichAddress}
              >
                {sandwich => (
                  <SandwichInviteCard
                    {...sandwich}
                    sandwichAddress={sandwichAddress}
                  />
                )}
              </SandwichInfoWrapper>
            ))}
          </div>
        </>
      ) : (
        <NoInvitesInfo />
      )}
    </section>
  )
}
