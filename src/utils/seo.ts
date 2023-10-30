import { type Metadata } from 'next'
import { AppName } from '@/config/app'
import { DefaultSEOTags } from '@/config/seo'

export const getMetadata = ({ title, ...metadata }: Metadata): Metadata => {
  const metaTitle = title ? `${title} | ${AppName}` : AppName

  return {
    ...DefaultSEOTags,
    ...metadata,
    title: metaTitle
  }
}
