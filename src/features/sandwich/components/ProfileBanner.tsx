import { Avatar } from '@/components/Avatar'
import { Image } from '@/components/Image'
import { type ImageSrc } from '@/types/image'

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
    <div className="pointer-events-none relative h-80 select-none self-stretch overflow-hidden rounded-3xl bg-black/10">
      {background && (
        <Image
          src={background}
          alt=""
          fill
          className="object-cover object-center"
        />
      )}
    </div>
    <Avatar
      src={avatar}
      avatarProps={{
        alt: name
      }}
      className="-mt-28"
    />
    <div className="flex flex-col gap-4">
      <h3 className="font-main text-3xl font-bold text-primary">{name}</h3>
      <p className="text-white/75">{description}</p>
    </div>
  </section>
)
