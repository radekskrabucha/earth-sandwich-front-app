import { cn } from '@/utils/styles'
import { AnimatedStatusMessage } from '../AnimatedStatusMessage'
import { Label } from '../Label'
import { InputWithIcon } from './InputWithIcon'
import type { InputWithIconProps } from './types'

export type InputProps = {
  label?: React.ReactNode
  errorMessage?: React.ReactNode
} & InputWithIconProps

export const Input: React.FC<InputProps> = ({
  label,
  errorMessage,
  className,
  ...props
}) => (
  <div className="flex flex-col gap-1">
    {label && (
      <Label
        className="text-secondary"
        htmlFor={props.id}
      >
        {label}
      </Label>
    )}
    <InputWithIcon
      {...props}
      className={cn(
        className,
        Boolean(
          Array.isArray(errorMessage) ? errorMessage.length : errorMessage
        ) && 'border-error'
      )}
    />
    {Array.isArray(errorMessage) ? (
      <AnimatedStatusMessage variant="error">
        {errorMessage[0]}
      </AnimatedStatusMessage>
    ) : (
      errorMessage && (
        <AnimatedStatusMessage variant="error">
          {errorMessage}
        </AnimatedStatusMessage>
      )
    )}
  </div>
)
