'use client'

import { Description } from '@radix-ui/react-dialog'
import { forwardRef } from 'react'
import { cn } from '@/utils/styles'
import { type ModalDescriptionProps } from './types'

export const ModalDescription = forwardRef<
  React.ElementRef<typeof Description>,
  ModalDescriptionProps
>(({ className, ...props }, ref) => (
  <Description
    ref={ref}
    className={cn(
      'font-secondary text-sm font-normal leading-normal text-white/75',
      className
    )}
    {...props}
  />
))
ModalDescription.displayName = Description.displayName
