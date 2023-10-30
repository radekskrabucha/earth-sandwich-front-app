import { WithClassName } from '@/types/common'
import { cn } from '@/utils/styles'

type Orientation = 'horizontal' | 'vertical'

type SeparatorProps = {
  decorative?: boolean
  orientation?: Orientation
}

export const Separator: React.FC<WithClassName<SeparatorProps>> = ({
  decorative = true,
  orientation = 'horizontal',
  className
}) => (
  <div
    className={cn(
      'shrink-0 bg-zinc-200',
      orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px',
      className
    )}
    {...(decorative
      ? { role: 'none' }
      : { 'aria-orientation': orientation, role: 'separator' })}
  />
)
