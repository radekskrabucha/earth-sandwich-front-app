import { type WithClassName } from '@/types/common'
import { cn } from '@/utils/styles'

export const LoaderCircle: React.FC<WithClassName> = ({ className }) => (
  <div
    className={cn(
      'inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent',
      className
    )}
    role="status"
  />
)
