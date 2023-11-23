import { readContract } from 'viem/actions'
import { EarthSandwichABI } from '@/abi/EarthSandwichABI'
import { Button } from '@/components/Button'
import { Link } from '@/components/Link'
import { InternalLink } from '@/config/app'
import { viemClient } from '@/lib/viem'
import type { HexString } from '@/types/common'
import { client } from '@/utils/env'
import { SandwichCard } from './components/SandwichCard'
import { SandwichInfoWrapper } from './components/SandwichInfoWrapper'
import { type ProfilePageProps } from './types'

export const ProfileSandwichesPage: React.FC<ProfilePageProps> = async ({
  params: { address }
}) => {
  const sandwiches = await readContract(viemClient, {
    abi: EarthSandwichABI,
    functionName: 'getMintedSandwichesByOwner',
    args: [address],
    address: client.NEXT_PUBLIC_EARTH_SANDWICH_CONTRACT_ADDRESS as HexString
  })

  return (
    <section className="layout-section">
      <Button asChild>
        <Link
          className="self-end"
          href={InternalLink.createSandwich}
        >
          <span className="text-2xl">+</span> create sandwich
        </Link>
      </Button>
      <div className="grid grid-cols-2 gap-8">
        {sandwiches.map(sandwich => (
          <SandwichInfoWrapper
            key={sandwich}
            address={sandwich}
          >
            {sandwich => <SandwichCard {...sandwich} />}
          </SandwichInfoWrapper>
        ))}
      </div>
    </section>
  )
}
