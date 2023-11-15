import { Image } from '@/components/Image'
import { type ImageSrc } from '@/types/image'

type EmojiImageWrapperProps = {
  src: ImageSrc
}

export const EmojiImageWrapper: React.FC<EmojiImageWrapperProps> = ({
  src
}) => (
  <div className="relative aspect-square w-full max-w-[80px]">
    <Image
      src={src}
      alt=""
      fill
      className="object-contain object-center"
    />
  </div>
)
