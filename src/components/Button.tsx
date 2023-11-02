import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'
import { cn } from '@/utils/styles'

export type ButtonProps = {
  asChild?: boolean
} & Pick<
  React.ComponentProps<'button'>,
  'children' | 'className' | 'onClick' | 'disabled' | 'type' | 'id'
> &
  VariantProps<typeof buttonVariants>

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      asChild = false,
      type = 'button',
      disabled,
      onClick,
      children,
      id
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button'

    return (
      <Comp
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        type={type}
        disabled={disabled}
        onClick={onClick}
        id={id}
      >
        {children}
      </Comp>
    )
  }
)
Button.displayName = 'Button'

export const buttonVariants = cva(
  'inline-flex items-center px-4 py-2 justify-center gap-1 rounded-md text-sm capitalize font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary:
          'bg-secondary text-white hover:bg-secondary-600 disabled:bg-secondary-300',
        outline:
          'border border-primary hover:border-primary-400 hover:text-primary-400 text-primary disabled:border-primary-700 disabled:text-primary-700',
        ghost: 'hover:bg-primary-100/10 disabled:opacity-50',
        link: 'underline-offset-2 underline p-0 disabled:opacity-50'
      }
    }
  }
)
