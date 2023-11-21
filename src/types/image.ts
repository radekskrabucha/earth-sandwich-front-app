import type { ImageProps as NextImageProps } from 'next/image'

export type ImageProps = Pick<
  NextImageProps,
  | 'alt'
  | 'src'
  | 'width'
  | 'height'
  | 'fill'
  | 'loader'
  | 'quality'
  | 'priority'
  | 'loading'
  | 'placeholder'
  | 'blurDataURL'
  | 'unoptimized'
  | 'className'
  | 'sizes'
>

export type ImageSrc = ImageProps['src']
