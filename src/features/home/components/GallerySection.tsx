import { GALLERY_IMAGES } from '../constants'
import { GalleryImageTile } from './GalleryImageTile'

export const GallerySection = () => (
  <section className="layout-section gap-10">
    <h2 className="font-main text-5xl font-extrabold text-primary max-md:text-4xl">
      Epic Sandwich Moments
    </h2>
    <div className="grid grid-cols-2 gap-8 max-xs:gap-6">
      {GALLERY_IMAGES.map((images, index) => (
        <GalleryImageTile
          images={images}
          key={index}
          delay={index === 1 || index === 2}
        />
      ))}
    </div>
  </section>
)
