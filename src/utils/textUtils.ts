import { type HexString } from '@/types/common'

export const shortenAddress = (address: HexString, left = 4, right = 4) => {
  const prefix = address.substring(0, left + 2)
  const suffix = address.substring(address.length - right)

  return `${prefix}...${suffix}`
}
