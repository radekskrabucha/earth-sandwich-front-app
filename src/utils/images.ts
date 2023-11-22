import { type ImageSrc } from '@/types/image'
import nextConfig from '../../next.config.mjs'
import { client } from './env'
import { withHttpsProtocol } from './url'

export const shouldOptimizeImage = (imageSrc: ImageSrc) =>
  Boolean(
    typeof imageSrc === 'string' &&
      nextConfig?.images?.remotePatterns?.some(({ hostname }) =>
        imageSrc.startsWith(withHttpsProtocol(hostname))
      )
  )

export const createIpfsLink = (url: string): string =>
  url.replace('ipfs://', client.NEXT_PUBLIC_IPFS_GATEWAY)
