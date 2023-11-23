'use client'

import { Overlay } from '@radix-ui/react-dialog'
import { forwardRef } from 'react'
import { cn } from '@/utils/styles'
import { type ModalBackgroundProps } from './types'

export const ModalBackground = forwardRef<
  React.ElementRef<typeof Overlay>,
  ModalBackgroundProps
>(({ className, ...props }, ref) => (
  <Overlay
    ref={ref}
    className={cn(
      'fixed inset-0 z-50 bg-black/50 transition-transform duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className
    )}
    {...props}
  />
))
ModalBackground.displayName = Overlay.displayName
