'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '@/utils/styles'
import { type StatusMessageProps, statusMessageVariants } from './StatusMessage'

export const AnimatedStatusMessage: React.FC<StatusMessageProps> = ({
  children,
  className,
  variant
}) => (
  <AnimatePresence>
    <motion.p
      className={cn(statusMessageVariants({ variant }), className)}
      transition={{ duration: 0.2 }}
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
    >
      {children}
    </motion.p>
  </AnimatePresence>
)
