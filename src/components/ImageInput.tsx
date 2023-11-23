import React from 'react'
import { cn } from '@/utils/styles'
import { AnimatedStatusMessage } from './AnimatedStatusMessage'
import { Button } from './Button'
import { Icon } from './Icon'
import { Image } from './Image'

type ImageInputProps = Pick<
  React.ComponentProps<'input'>,
  'className' | 'onBlur' | 'name' | 'disabled'
> & {
  errorMessage?: React.ReactNode
  value: File | string
  onChangeValue: (file: File | string) => void
  id: string
}

export const ImageInput = React.forwardRef<HTMLInputElement, ImageInputProps>(
  (
    {
      errorMessage,
      className,
      id,
      value,
      onChangeValue,
      disabled,
      ...inputProps
    },
    ref
  ) => (
    <div className="flex flex-col gap-2">
      <label
        className={cn(
          'relative flex h-36 w-36 flex-shrink-0 cursor-pointer items-start justify-end overflow-hidden rounded-xl border-2 border-primary bg-transparent p-1 transition-colors disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
          Boolean(errorMessage) && 'border-error',
          !value && 'border-dashed bg-white/10',
          className
        )}
        htmlFor={id}
      >
        {value && (
          <>
            <Image
              src={URL.createObjectURL(value as Blob)}
              alt=""
              fill
              className="object-cover object-center"
            />
            <Button
              variant="ghost"
              className="z-10 rounded-full bg-white/50 p-2 hover:bg-white/75"
              onClick={e => {
                e.preventDefault()
                onChangeValue('')
              }}
              disabled={disabled}
            >
              <Icon
                id="close"
                className="h-[8px] w-[7px] flex-shrink-0 translate-y-px scale-[150%] fill-current"
              />
            </Button>
          </>
        )}
      </label>
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
      <input
        {...inputProps}
        disabled={disabled}
        ref={ref}
        id={id}
        className="hidden"
        type="file"
        accept="image/*"
        onChange={event => {
          if (event.target.files && event.target.files[0]) {
            onChangeValue(event.target.files[0])

            return (event.target.value = '')
          }

          return undefined
        }}
      />
    </div>
  )
)

ImageInput.displayName = 'ImageInput'
