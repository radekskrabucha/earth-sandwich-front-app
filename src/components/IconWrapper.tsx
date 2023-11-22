import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/utils/styles'

type IconWrapperProps = {
  className?: string
  children?: React.ReactNode
  asChild?: boolean
}

export const IconWrapper: React.FC<IconWrapperProps> = ({
  children,
  className,
  asChild = false
}) => {
  const Comp = asChild ? Slot : 'span'

  return (
    <Comp
      className={cn(
        'flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-black/10',
        className
      )}
    >
      {children}
    </Comp>
  )
}
