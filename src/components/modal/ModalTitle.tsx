'use client'

import { Title } from '@radix-ui/react-dialog'
import { forwardRef } from 'react'
import { cn } from '@/utils/styles'
import { type ModalTitleProps } from './types'

export const ModalTitle = forwardRef<
  React.ElementRef<typeof Title>,
  ModalTitleProps
>(({ className, ...props }, ref) => (
  <Title
    ref={ref}
    className={cn('font-main text-2xl', className)}
    {...props}
  />
))
ModalTitle.displayName = Title.displayName
