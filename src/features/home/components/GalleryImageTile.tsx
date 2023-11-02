'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Image } from '@/components/Image'
import { ImageSrc } from '@/types/image'

type GalleryImageTileProps = {
  images: Array<ImageSrc>
  delay?: boolean
}

export const GalleryImageTile: React.FC<GalleryImageTileProps> = ({
  images,
  delay
}) => {
  const [featuredImageIndex, setFeaturedImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setFeaturedImageIndex(prevIndex =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="relative aspect-square overflow-hidden rounded-3xl">
      {images.map((src, index) => (
        <motion.div
          className="absolute inset-0 h-full w-full"
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === featuredImageIndex ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{
            delay: delay ? 1.5 : 0
          }}
        >
          <Image
            src={src}
            alt=""
            fill
            className="object-cover object-center"
          />
        </motion.div>
      ))}
    </div>
  )
}
