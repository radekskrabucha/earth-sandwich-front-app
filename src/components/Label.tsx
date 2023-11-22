import { cn } from '@/utils/styles'

type LabelProps = Pick<
  React.ComponentProps<'label'>,
  'htmlFor' | 'className' | 'children'
>

export const Label: React.FC<LabelProps> = ({
  children,
  className,
  ...props
}) => (
  <label
    className={cn('text-lg', className)}
    {...props}
  >
    {children}
  </label>
)
