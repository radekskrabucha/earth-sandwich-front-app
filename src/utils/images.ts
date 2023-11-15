import { type ImageSrc } from '@/types/image'
import nextConfig from '../../next.config.mjs'
import { server } from './env'
import { withHttpsProtocol } from './url'

export const shouldOptimizeImage = (imageSrc: ImageSrc) =>
  Boolean(
    typeof imageSrc === 'string' &&
      nextConfig?.images?.remotePatterns?.some(({ hostname }) =>
        imageSrc.startsWith(withHttpsProtocol(hostname))
      )
  )

export const createIpfsLink = (url: string): string =>
  url.replace('ipfs://', server.IPFS_GATEWAY)
