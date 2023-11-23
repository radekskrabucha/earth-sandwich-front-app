import Logo from '@/public/images/shared/logo.svg'
import type { HexString } from '@/types/common'

export type ProfileSegment =
  | ''
  | '/sandwiches'
  | '/followers'
  | '/following'
  | '/sandwich-invitations'
export type SandwichDetailsSegment = '' | '/mint' | '/accept-invitation'

export const InternalLink = {
  home: '/',
  login: '/login',
  createSandwich: '/create-sandwich',
  profile: (address: HexString, segment: ProfileSegment) =>
    `/profile/${address}${segment}`,
  sandwichDetails: (id: HexString, segment: SandwichDetailsSegment) =>
    `/sandwich/${id}${segment}`
} as const

export const ExternalLink = {} as const

export const AppName = 'EarthSandwich'

export { Logo }
