import { useQuery } from '@tanstack/react-query'
import { Avatar } from '@/components/Avatar'
import { Button } from '@/components/Button'
import { Link } from '@/components/Link'
import { InternalLink } from '@/config/app'
import { QueryKey } from '@/lib/reactQuery'
import type { HexString } from '@/types/common'
import { createIpfsLink } from '@/utils/ipfs'
import { getLSP3ProfileData } from '@/utils/profile'

type AlreadyConnectedProps = {
  address: HexString
}

export const AlreadyConnected: React.FC<AlreadyConnectedProps> = ({
  address
}) => {
  const { data: profile } = useQuery({
    queryFn: () => getLSP3ProfileData(address),
    queryKey: [QueryKey.getUpProfileData, address]
  })

  return (
    <section className="layout-section items-center gap-16 text-center">
      <div className="flex flex-col items-center gap-8">
        <h2 className="font-main text-4xl font-bold text-primary">
          Hello {profile?.name ?? 'there'}!
        </h2>
        <Avatar
          src={
            profile?.profileImage &&
            profile?.profileImage[0] &&
            createIpfsLink(profile.profileImage?.[0].url)
          }
          className="h-32 w-32"
          avatarProps={{
            alt: profile?.name || ''
          }}
        />
        <p className="max-w-xl text-white/50">
          Explore the world of digital creativity and connection on Lukso. Your
          journey into innovative social experiences starts here.
        </p>
      </div>

      <div className="flex flex-col items-center gap-12">
        <h2 className="font-main text-4xl font-bold text-primary">
          What's Next?
        </h2>
        <div className="flex flex-col items-center gap-4">
          <h3 className="font-main text-xl text-secondary">
            Create a New Sandwich
          </h3>
          <p className="max-w-xl text-white/50">
            Ready to make new connections?
          </p>
          <Button asChild>
            <Link href={InternalLink.createSandwich}>Create New Sandwich</Link>
          </Button>
        </div>
        <div className="flex flex-col items-center gap-4">
          <h3 className="font-main text-xl text-secondary">
            Visit Your Profile
          </h3>
          <p className="max-w-xl text-white/50">
            Review your past sandwiches and explore your digital journey.
          </p>
          <Button
            asChild
            variant="outline"
          >
            <Link href={InternalLink.profile(address, '/sandwiches')}>
              Go to profile
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
