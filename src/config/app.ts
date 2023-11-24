import Logo from '@/public/images/shared/logo.svg'
import type { HexString } from '@/types/common'

export type ProfileSegment =
  | '/sandwiches'
  | '/sandwiches/participated'
  | '/sandwiches/pending'
  | '/sandwiches/invitations'
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

export const ExternalLink = {
  downloadUP:
    'https://chromewebstore.google.com/detail/universal-profiles/abpickdkkbnbcoepogfhkhennhfhehfn?pli=1',
  lukso: 'https://lukso.network/'
} as const

export const AppName = 'EarthSandwich'

export { Logo }
