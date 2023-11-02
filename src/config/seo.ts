import { type Metadata } from 'next'
import { client } from '@/utils/env'
import { AppName } from './app'

export const Description = `${AppName} is a social network for people who want to make the world a better place by making sandwiches. Join us!`

export const DefaultSEOTags: Metadata = {
  description: Description,
  metadataBase: new URL(client.NEXT_PUBLIC_APP_BASE_URL),
  applicationName: AppName,
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    siteName: AppName
  },
  twitter: {
    card: 'summary_large_image'
  }
}
