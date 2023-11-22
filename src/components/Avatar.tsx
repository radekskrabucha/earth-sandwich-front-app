import AvatarPlaceholder from '@/public/images/shared/profile-placeholder.webp'
import type { Undefinable, WithClassName } from '@/types/common'
import type { ImageProps, ImageSrc } from '@/types/image'
import { cn } from '@/utils/styles'
import { IconWrapper } from './IconWrapper'
import { Image } from './Image'

type AvatarProps = {
  avatarProps?: Omit<ImageProps, 'src'>
  src: Undefinable<ImageSrc>
}

export const Avatar: React.FC<WithClassName<AvatarProps>> = ({
  className,
  avatarProps,
  src = AvatarPlaceholder
}) => (
  <IconWrapper
    className={cn(
      'pointer-events-none relative h-40 w-40 select-none overflow-hidden',
      className
    )}
  >
    <Image
      src={src}
      alt={avatarProps?.alt || ''}
      fill={avatarProps?.fill || true}
      {...avatarProps}
      className={cn('object-cover object-center', avatarProps?.className)}
    />
  </IconWrapper>
)
