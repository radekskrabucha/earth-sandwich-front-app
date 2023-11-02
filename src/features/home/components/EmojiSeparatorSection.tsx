import { ImageSrc } from '@/types/image'
import { EmojiImageWrapper } from './EmojiImageWrapper'

type EmojiSeparatorSectionProps = {
  emoji1: ImageSrc
  emoji2: ImageSrc
}

export const EmojiSeparatorSection: React.FC<EmojiSeparatorSectionProps> = ({
  emoji1,
  emoji2
}) => (
  <section className="layout-section max-w-[1200px] flex-row justify-between gap-12 py-40 max-sm:py-24">
    <EmojiImageWrapper src={emoji1} />
    <EmojiImageWrapper src={emoji2} />
    <EmojiImageWrapper src={emoji1} />
    <EmojiImageWrapper src={emoji2} />
    <EmojiImageWrapper src={emoji1} />
  </section>
)
