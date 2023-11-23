'use client'

import { Content } from '@radix-ui/react-dialog'
import { forwardRef } from 'react'
import { cn } from '@/utils/styles'
import { type ModalContentProps } from './types'

export const ModalContent = forwardRef<
  React.ElementRef<typeof Content>,
  ModalContentProps
>(({ className, ...props }, ref) => (
  <Content
    ref={ref}
    className={cn(
      'fixed inset-1/2 z-50 flex h-max max-h-[min(90dvh,600px)] w-[min(calc(100vw-2*0.75rem),594px)] -translate-x-1/2 -translate-y-1/2 flex-col rounded-3xl border border-white/10 bg-background font-normal text-white transition-transform duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]',
      className
    )}
    {...props}
  />
))
ModalContent.displayName = Content.displayName
