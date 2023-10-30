import { IconId as IconIdType } from '@/types/icons'

export const IconId = {
  linkedin: 'linkedin',
  github: 'github',
  twitter: 'twitter'
} as const

export const getIconHref = (id: IconIdType) => `/icons/sprite.svg#${id}`
