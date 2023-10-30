import { client } from '@/utils/env'

export const InternalLink = {
  home: '/'
} as const

export const ExternalLink = {
  github: client.NEXT_PUBLIC_GITHUB_URL,
  linkedin: client.NEXT_PUBLIC_LINKEDIN_URL,
  twitter: client.NEXT_PUBLIC_TWITTER_URL,
  email: `mailto:${client.NEXT_PUBLIC_EMAIL}`,
  sourceCode: 'https://github.com/radekskrabucha/next-app-template'
} as const

export const AppName = 'Next App Template'
