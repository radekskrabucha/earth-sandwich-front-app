import { readContract } from 'viem/actions'
import { EarthSandwichABI } from '@/abi/EarthSandwichABI'
import { Button } from '@/components/Button'
import { Link } from '@/components/Link'
import { InternalLink } from '@/config/app'
import { viemClient } from '@/lib/viem'
import type { HexString } from '@/types/common'
import { client } from '@/utils/env'
import { type ProfilePageProps } from './types'

export const ProfileSandwichesPage: React.FC<ProfilePageProps> = async ({
  params: { address }
}) => {
  const sandwiches = await readContract(viemClient, {
    abi: EarthSandwichABI,
    functionName: 'getOwnedSandwiches',
    args: ['0xb2537410ADbC1B2c04b7da7dcb58CC4120DEa26F'],
    address: client.NEXT_PUBLIC_EARTH_SANDWICH_CONTRACT_ADDRESS as HexString
  })

  console.log('sandwiches', sandwiches)

  return (
    <section className="layout-section">
      <h1>Profile sandwiches page</h1>
      <Button
        asChild
        variant="link"
      >
        <Link href={InternalLink.profile(address)}>Profile</Link>
      </Button>
    </section>
  )
}
