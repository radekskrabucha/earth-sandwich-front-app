import { cx } from 'class-variance-authority'
import { Image } from '@/components/Image'
import { ImageSrc } from '@/types/image'

type ProfileBannerProps = {
  name: string
  description: string
  avatar?: ImageSrc
  background?: ImageSrc
}

export const ProfileBanner: React.FC<ProfileBannerProps> = ({
  name,
  description,
  avatar,
  background
}) => (
  <section className="layout-section items-center gap-8 text-center">
    {background && (
      <div className="pointer-events-none relative h-80 select-none self-stretch overflow-hidden rounded-3xl">
        <Image
          src={background}
          alt=""
          fill
          className="object-cover object-center"
        />
      </div>
    )}
    {avatar && (
      <div
        className={cx(
          'pointer-events-none relative h-40 w-40 select-none overflow-hidden rounded-full',
          background && '-mt-28 '
        )}
      >
        <Image
          src={avatar}
          alt={name}
          fill
          className="object-cover object-center"
        />
      </div>
    )}
    <div className="flex flex-col gap-4">
      <h3 className="font-main text-3xl font-bold text-primary">{name}</h3>
      <p className="text-white/75">{description}</p>
    </div>
  </section>
)
