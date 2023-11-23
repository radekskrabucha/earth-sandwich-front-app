import { Button } from '@/components/Button'
import { Icon } from '@/components/Icon'
import { Link } from '@/components/Link'
import { Modal, ModalContentWrapper } from '@/components/modal'
import { InternalLink } from '@/config/app'
import type { SandwichDetailsPageProps } from '../sandwichDetails/types'

export const AcceptInvitationPage: React.FC<SandwichDetailsPageProps> = ({
  params: { id }
}) => (
  <Modal open>
    <ModalContentWrapper
      headerProps={{
        title: {
          children: 'Accept Invitation'
        },
        description: {
          children:
            'Someones has invited you to make sandwich with them! Fill out the form below to accept the invitation and make sandwich together.'
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
      <div className="flex flex-col gap-6">
        <Button asChild>
          <Link href={InternalLink.sandwichDetails(id, '')}>close</Link>
        </Button>
      </div>
    </ModalContentWrapper>
  </Modal>
)
