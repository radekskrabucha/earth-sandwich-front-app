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
      variant,
      size,
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
        className={cn(buttonVariants({ variant, size, className }))}
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
  'inline-flex items-center justify-center gap-1 rounded-md text-sm capitalize font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-secondary-50 hover:bg-primary-400 disabled:bg-primary-600',
        destructive:
          'bg-error text-slate-50 hover:bg-error-600 disabled:bg-error-400',
        outline:
          'border border-primary hover:border-primary-400 hover:text-primary-400 text-primary disabled:border-primary-600 disabled:text-primary-600',
        secondary:
          'bg-secondary text-primary-50 hover:bg-secondary-600 disabled:bg-secondary-400',
        ghost:
          'text-secondary-900 hover:bg-primary-100 hover:text-secondary-800 disabled:text-secondary-700',
        link: 'text-secondary-900 underline-offset-4 hover:underline'
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)
