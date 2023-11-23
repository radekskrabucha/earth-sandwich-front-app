import { cn } from '@/utils/styles'
import { Icon } from '../Icon'
import { IconWrapper } from '../IconWrapper'
import { ModalClose } from './ModalClose'
import { ModalDescription } from './ModalDescription'
import { ModalTitle } from './ModalTitle'
import { type ModalHeaderProps } from './types'

export const ModalHeader: React.FC<ModalHeaderProps> = ({
  title,
  className,
  description,
  titleWrapperClassName,
  icon
}) => (
  <div
    className={cn(
      'm-8 !mb-0 flex justify-between gap-4 border-b border-b-white/10 pb-6 max-md:m-6 max-xxs:m-4',
      className
    )}
  >
    <div className={cn('flex flex-col gap-2', titleWrapperClassName)}>
      <ModalTitle {...title} />
      {description && <ModalDescription {...description} />}
    </div>
    {icon === null && null}
    {icon === undefined && (
      <ModalClose className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-white/[15%]">
        <Icon
          id="close"
          className="h-[8px] w-[7px] flex-shrink-0 translate-y-px scale-[200%] fill-current"
        />
      </ModalClose>
    )}
    {icon && <IconWrapper {...icon} />}
  </div>
)
