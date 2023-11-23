'use client'

import { Close } from '@radix-ui/react-dialog'
import { forwardRef } from 'react'
import { type ModalCloseProps } from './types'

export const ModalClose = forwardRef<
  React.ElementRef<typeof Close>,
  ModalCloseProps
>(({ className, children, ...props }, ref) => (
  <Close
    ref={ref}
    className={className}
    {...props}
  >
    {children}
    <span className="sr-only">Close</span>
  </Close>
))
ModalClose.displayName = Close.displayName
