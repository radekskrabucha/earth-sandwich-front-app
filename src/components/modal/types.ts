import type {
  DialogPortalProps,
  DialogOverlayProps,
  DialogContentProps,
  DialogTitleProps,
  DialogDescriptionProps,
  DialogCloseProps
} from '@radix-ui/react-dialog'
import type { Nilable, WithClassName } from '@/types/common'

export type ModalPortalProps = Pick<
  DialogPortalProps,
  'forceMount' | 'container'
>
export type ModalBackgroundProps = Pick<
  DialogOverlayProps,
  'asChild' | 'forceMount' | 'className'
>
export type ModalContentProps = Pick<
  DialogContentProps,
  | 'className'
  | 'children'
  | 'asChild'
  | 'forceMount'
  | 'onOpenAutoFocus'
  | 'onCloseAutoFocus'
  | 'onEscapeKeyDown'
  | 'onPointerDownOutside'
  | 'onInteractOutside'
>

export type ModalHeaderProps = {
  title: ModalTitleProps
  description?: ModalDescriptionProps
  icon?: Nilable<ModalCloseProps>
  titleWrapperClassName?: string
} & WithClassName

export type ModalTitleProps = Pick<
  DialogTitleProps,
  'className' | 'children' | 'asChild'
>

export type ModalDescriptionProps = Pick<
  DialogDescriptionProps,
  'className' | 'children' | 'asChild'
>

export type ModalCloseProps = Pick<
  DialogCloseProps,
  'className' | 'children' | 'asChild'
>
