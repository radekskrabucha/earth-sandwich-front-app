import { type VariantProps, cva } from 'class-variance-authority'
import { cn } from '@/utils/styles'

export type StatusMessageProps = Pick<
  React.ComponentProps<'p'>,
  'children' | 'className'
> &
  VariantProps<typeof statusMessageVariants>

export const StatusMessage: React.FC<StatusMessageProps> = ({
  className,
  children,
  variant = 'info'
}) => (
  <p className={cn(statusMessageVariants({ variant }), className)}>
    {children}
  </p>
)

export const statusMessageVariants = cva('text-sm', {
  variants: {
    variant: {
      info: 'text-zinc-700',
      success: 'text-success',
      warning: 'text-warning',
      error: 'text-error'
    }
  }
})
