import { ImageSrc } from '@/types/image'
import nextConfig from '../../next.config.mjs'
import { withHttpsProtocol } from './url'

export const shouldOptimizeImage = (imageSrc: ImageSrc) =>
  Boolean(
    typeof imageSrc === 'string' &&
      nextConfig?.images?.remotePatterns?.some(({ hostname }) =>
        imageSrc.startsWith(withHttpsProtocol(hostname))
      )
  )
