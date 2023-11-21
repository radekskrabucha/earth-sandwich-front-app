import Logo from '@/public/images/shared/logo.svg'

export const InternalLink = {
  home: '/',
  profile: (address: string, segment = '') => `/profile/${address}/${segment}`
} as const

export const ExternalLink = {} as const

export const AppName = 'EarthSandwich'

export { Logo }
