import { Image } from '@/components/Image'
import Sandwich1 from '@/public/images/homepage/sandwich-1.webp'
import Sandwich2 from '@/public/images/homepage/sandwich-2.webp'

const IMAGES = [
  'https://framerusercontent.com/images/0dFkG1YAWnQcfE9CnqL6tjNZmY.jpg?scale-down-to=1024',
  Sandwich1,
  Sandwich2,
  'https://framerusercontent.com/images/rsael2wKuNn2cEpoSBHGNFpdfWw.jpg'
]

export const GallerySection = () => (
  <section className="layout-section gap-10">
    <h2 className="font-main text-5xl text-primary max-md:text-4xl">
      Epic Sandwich Moments
    </h2>
    <div className="grid grid-cols-2 gap-8 max-xs:gap-6">
      {IMAGES.map((src, index) => (
        <div
          key={index}
          className="relative aspect-square overflow-hidden rounded-3xl"
        >
          <Image
            src={src}
            alt=""
            fill
            className="object-cover object-center"
          />
        </div>
      ))}
    </div>
  </section>
)
