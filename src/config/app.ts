import Logo from '@/public/images/shared/logo.svg'

export const InternalLink = {
  home: '/',
  profile: (address: string) => `/profile/${address}`,
  profileSandwiches: (address: string) => `/profile/${address}/sandwiches`
} as const

export const ExternalLink = {} as const

export const AppName = 'EarthSandwich'

export { Logo }
