import { Image } from '@/components/Image'
import { GALLERY_IMAGES } from '../constants'

export const GallerySection = () => (
  <section className="layout-section gap-10">
    <h2 className="font-main text-5xl text-primary max-md:text-4xl">
      Epic Sandwich Moments
    </h2>
    <div className="grid grid-cols-2 gap-8 max-xs:gap-6">
      {GALLERY_IMAGES.map((src, index) => (
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
