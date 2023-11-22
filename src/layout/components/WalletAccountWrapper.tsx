'use client'

import { useAccount } from 'wagmi'
import Link from 'next/link'
import { Button } from '@/components/Button'
import { InternalLink } from '@/config/app'
import { Account } from './Account'

export const WalletAccountWrapper = () => {
  const { address } = useAccount()

  return address ? (
    <Account address={address} />
  ) : (
    <Button asChild>
      <Link href={InternalLink.login}>log in</Link>
    </Button>
  )
}
