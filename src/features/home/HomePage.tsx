import EmojiCelebrate from '@/public/images/homepage/celebrate.svg'
import EmojiHandshake from '@/public/images/homepage/handshake.svg'
import EmojiRocket from '@/public/images/homepage/rocket.svg'
import EmojiStar from '@/public/images/homepage/star.svg'
import {
  DescriptionSection,
  EmojiSeparatorSection,
  GallerySection,
  HeroSection
} from './components'

export const HomePage = () => (
  <>
    <HeroSection />
    <DescriptionSection />
    <GallerySection />
    <EmojiSeparatorSection
      emoji1={EmojiRocket}
      emoji2={EmojiStar}
    />
    <EmojiSeparatorSection
      emoji1={EmojiHandshake}
      emoji2={EmojiCelebrate}
    />
  </>
)
