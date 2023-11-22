import { cn } from '@/utils/styles'
import { AnimatedStatusMessage } from '../AnimatedStatusMessage'
import { Label } from '../Label'
import { type InputProps } from './Input'
import { InputWithIcon } from './InputWithIcon'

type InputWithDescriptionProps = {
  description?: React.ReactNode
} & InputProps

export const InputWithDescription: React.FC<InputWithDescriptionProps> = ({
  label,
  errorMessage,
  description,
  className,
  ...props
}) => (
  <div className="flex flex-col gap-1">
    {label && <Label htmlFor={props.id}>{label}</Label>}
    {description}
    <InputWithIcon
      {...props}
      className={cn(
        className,
        Boolean(
          Array.isArray(errorMessage) ? errorMessage.length : errorMessage
        ) && 'border-error'
      )}
    />
    {Array.isArray(errorMessage)
      ? errorMessage.map((error, index) => (
          <AnimatedStatusMessage
            key={index}
            variant="error"
          >
            {error}
          </AnimatedStatusMessage>
        ))
      : errorMessage && (
          <AnimatedStatusMessage variant="error">
            {errorMessage}
          </AnimatedStatusMessage>
        )}
  </div>
)
