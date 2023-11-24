import { useAccount } from 'wagmi'
import { useRouter } from 'next/navigation'
import { InternalLink, type ProfileSegment } from '@/config/app'
import type { HexString } from '@/types/common'

export const useAccountWithRouter = () => {
  const { push } = useRouter()
  const { address } = useAccount()

  return {
    address,
    push,
    pushToLoginPage: () => push(InternalLink.login),
    getIsUserAccount: (userAddress: HexString) => address === userAddress,
    getUserMeProfileLink: address
      ? (segment?: ProfileSegment) =>
          InternalLink.profile(address, segment ?? '/sandwiches')
      : undefined
  }
}
