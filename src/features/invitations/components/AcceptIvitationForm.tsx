'use client'

import { AnimatedStatusMessage } from '@/components/AnimatedStatusMessage'
import { Button } from '@/components/Button'
import { ImageInput } from '@/components/ImageInput'
import { LoaderCircle } from '@/components/LoaderCircle'
import type { HexString } from '@/types/common'
import { useAcceptInvitationForm } from '../hooks/useAcceptIvitationForm'

type AcceptInvitationFormProps = {
  sandwichId: HexString
}

export const AcceptInvitationForm: React.FC<AcceptInvitationFormProps> = ({
  sandwichId
}) => {
  const { image, setImage, onSubmit, data, errorMessage, isLoading, disabled } =
    useAcceptInvitationForm(sandwichId)

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        onSubmit()
      }}
      className="flex flex-col gap-8"
    >
      <ImageInput
        id="photo"
        name="photo"
        onChangeValue={setImage}
        value={image}
        disabled={isLoading}
        className="self-center"
      />

      <Button
        type="submit"
        disabled={isLoading || disabled}
      >
        {isLoading && <LoaderCircle />}
        accept
      </Button>
      {errorMessage && (
        <AnimatedStatusMessage variant="error">
          {errorMessage}
        </AnimatedStatusMessage>
      )}
      {data && (
        <AnimatedStatusMessage variant="success">
          Invitation accepted! 🎉
        </AnimatedStatusMessage>
      )}
    </form>
  )
}
