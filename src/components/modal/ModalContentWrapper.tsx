import { ModalBackground } from './ModalBackground'
import { ModalContent } from './ModalContent'
import { ModalHeader } from './ModalHeader'
import { ModalPortal } from './ModalPortal'
import {
  type ModalBackgroundProps,
  type ModalContentProps,
  type ModalHeaderProps,
  type ModalPortalProps
} from './types'

type ModalContentWrapperProps = {
  portalProps?: ModalPortalProps
  backgroundProps?: ModalBackgroundProps
  contentProps?: ModalContentProps
  headerProps: ModalHeaderProps
}

export const ModalContentWrapper: React.FC<
  React.PropsWithChildren<ModalContentWrapperProps>
> = ({ portalProps, backgroundProps, contentProps, children, headerProps }) => (
  <ModalPortal {...portalProps}>
    <ModalBackground {...backgroundProps} />
    <ModalContent {...contentProps}>
      <ModalHeader {...headerProps} />
      <div className="scrollbar-primary relative flex flex-col gap-6 overflow-y-auto p-8 !pt-6 pr-7 max-md:p-6 max-md:pr-5 max-xxs:p-4 max-xxs:pr-3">
        {children}
      </div>
    </ModalContent>
  </ModalPortal>
)
