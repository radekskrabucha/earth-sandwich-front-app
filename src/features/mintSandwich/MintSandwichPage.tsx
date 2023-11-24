import { Button } from '@/components/Button'
import { Icon } from '@/components/Icon'
import { Link } from '@/components/Link'
import { RestrictedProfileWrapper } from '@/components/RestrictedProfileWrapper'
import { Modal, ModalContentWrapper } from '@/components/modal'
import { InternalLink } from '@/config/app'
import type { SandwichDetailsPageProps } from '@/features/sandwichDetails/types'

export const MintSandwichPage: React.FC<SandwichDetailsPageProps> = ({
  params: { id }
}) => (
  <RestrictedProfileWrapper
    pushTo={InternalLink.sandwichDetails(id, '')}
    shouldBeConnected
  >
    <Modal open>
      <ModalContentWrapper
        headerProps={{
          title: {
            children: 'Add Final Ingredients'
          },
          description: {
            children:
              'Almost there! Add your photo, some secret ingredients and cook sandwich together!'
          },
          icon: {
            children: (
              <Button
                variant="ghost"
                className="h-full w-full rounded-full"
                asChild
              >
                <Link href={InternalLink.sandwichDetails(id, '')}>
                  <Icon
                    id="close"
                    className="h-[8px] w-[7px] flex-shrink-0 translate-y-px scale-[200%] fill-current"
                  />
                </Link>
              </Button>
            )
          }
        }}
      >
        <div>
          <h3>Lorem ipsum dolor sit amet.</h3>
        </div>
      </ModalContentWrapper>
    </Modal>
  </RestrictedProfileWrapper>
)
