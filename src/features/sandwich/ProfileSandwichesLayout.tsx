import { Button } from '@/components/Button'
import { Link } from '@/components/Link'
import { RestrictedProfileWrapper } from '@/components/RestrictedProfileWrapper'
import { InternalLink } from '@/config/app'
import type { ProfilePageProps } from '@/features/profile/types'

export const ProfileSandwichesLayout: React.FC<
  React.PropsWithChildren<ProfilePageProps>
> = ({ params: { address }, children }) => (
  <>
    <section className="layout-section">
      <div className="flex items-center justify-between gap-4">
        <RestrictedProfileWrapper
          pushTo={undefined}
          address={address}
          shouldMatchAddress
        >
          <Button
            asChild
            variant="link"
            className="text-primary"
          >
            <Link href={InternalLink.profile(address, '/sandwiches/pending')}>
              pending sandwiches
            </Link>
          </Button>
        </RestrictedProfileWrapper>
        <Button asChild>
          <Link
            href={InternalLink.createSandwich}
            className="ml-auto"
          >
            <span className="text-2xl leading-none">+</span> create sandwich
          </Link>
        </Button>
      </div>
    </section>
    {children}
  </>
)
