import { type IconId as IconIdType } from '@/types/icons'

export const IconId = {
  linkedin: 'linkedin',
  github: 'github',
  twitter: 'twitter',
  close: 'close'
} as const

export const getIconHref = (id: IconIdType) => `/icons/sprite.svg#${id}`
