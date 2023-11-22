import * as React from 'react'
import { cn } from '@/utils/styles'
import { type InputRawProps } from './types'

const InputRaw = React.forwardRef<HTMLInputElement, InputRawProps>(
  (
    {
      className,
      type = 'text',
      autoComplete = 'off',
      formNoValidate = true,
      id,
      name,
      ...props
    },
    ref
  ) => (
    <input
      type={type}
      className={cn(
        'placeholder:text-gray w-full bg-transparent text-sm text-white [appearance:textfield] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none',
        className
      )}
      ref={ref}
      autoComplete={autoComplete}
      formNoValidate={formNoValidate}
      id={id}
      name={name || id}
      {...props}
    />
  )
)
InputRaw.displayName = 'Input'

export { InputRaw }
