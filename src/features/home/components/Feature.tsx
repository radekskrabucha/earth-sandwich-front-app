import Image from 'next/image'
import { ImageSrc } from '@/types/image'

type FeatureProps = {
  id: string
  title: string
  description: string
  image: ImageSrc
}

export const Feature: React.FC<FeatureProps> = ({
  description,
  id,
  image,
  title
}) => (
  <div
    id={id}
    className="flex flex-row-reverse items-center gap-10 even:flex-row max-md:flex-col-reverse max-md:gap-8 max-md:even:flex-col-reverse"
  >
    <div className="relative aspect-square flex-1 overflow-hidden rounded-3xl max-md:self-stretch">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover object-center"
      />
      <div className="absolute inset-0 z-10 bg-background/50" />
    </div>
    <div className="flex flex-1 flex-col gap-6 max-md:gap-4">
      <h3 className="font-main text-4xl max-md:text-3xl">{title}</h3>
      <p className="text-white/75">{description}</p>
    </div>
  </div>
)
