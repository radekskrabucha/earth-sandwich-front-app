import { readContract } from 'viem/actions'
import { EarthSandwichABI } from '@/abi/EarthSandwichABI'
import { viemClient } from '@/lib/viem'
import type { HexString } from '@/types/common'
import { client } from '@/utils/env'

type InvitesSectionProps = {
  address: HexString
}

export const InvitesSection: React.FC<InvitesSectionProps> = async ({
  address
}) => {
  const sandwichInvites = await readContract(viemClient, {
    abi: EarthSandwichABI,
    functionName: 'getParticipatedSandwiches',
    args: [address],
    address: client.NEXT_PUBLIC_EARTH_SANDWICH_CONTRACT_ADDRESS as HexString
  })

  console.log({ sandwichInvites })

  return (
    <section className="layout-section">
      <h2>Invites page</h2>
    </section>
  )
}
