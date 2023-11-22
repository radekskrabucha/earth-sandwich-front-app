import Logo from '@/public/images/shared/logo.svg'
import type { HexString } from '@/types/common'

export type ProfileSegment =
  | ''
  | '/sandwiches'
  | '/followers'
  | '/following'
  | '/sandwich-invites'

export const InternalLink = {
  home: '/',
  login: '/login',
  profile: (address: HexString, segment: ProfileSegment) =>
    `/profile/${address}${segment}`
} as const

export const ExternalLink = {} as const

export const AppName = 'EarthSandwich'

export { Logo }
