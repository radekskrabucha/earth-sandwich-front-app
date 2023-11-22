import { readContract } from '@wagmi/core'
import { EarthSandwichABI } from '@/abi/EarthSandwichABI'
import type { HexString } from '@/types/common'
import { client } from '@/utils/env'

type SandwichCardProps = {
  address: HexString
}

export const SandwichCard: React.FC<SandwichCardProps> = async ({
  address
}) => {
  const sandwich = await readContract({
    abi: EarthSandwichABI,
    functionName: 'getSandwichDetails',
    args: [address],
    address: client.NEXT_PUBLIC_EARTH_SANDWICH_CONTRACT_ADDRESS as HexString
  })

  return (
    <div>
      <h1>Sandwich Card</h1>
      <pre>
        <code>{JSON.stringify(sandwich, null, 2)}</code>
      </pre>
    </div>
  )
}
