'use client'

import { Portal } from '@radix-ui/react-dialog'
import { type ModalPortalProps } from './types'

export const ModalPortal = ({ ...props }: ModalPortalProps) => (
  <Portal {...props} />
)
