import EmojiCelebrate from '@/public/images/homepage/celebrate.svg'
import EmojiHandshake from '@/public/images/homepage/handshake.svg'
import EmojiRocket from '@/public/images/homepage/rocket.svg'
import EmojiStar from '@/public/images/homepage/star.svg'
import {
  CallToActionSection,
  DescriptionSection,
  EmojiSeparatorSection,
  FeaturesSection,
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
    <FeaturesSection />
    <EmojiSeparatorSection
      emoji1={EmojiHandshake}
      emoji2={EmojiCelebrate}
    />
    <CallToActionSection />
  </>
)
