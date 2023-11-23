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
  const { image, setImage, onSubmit, data, errorMessage, isLoading } =
    useAcceptInvitationForm(sandwichId)

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        onSubmit()
      }}
      className="flex flex-col gap-6"
    >
      <ImageInput
        id="photo"
        name="photo"
        onChangeValue={setImage}
        value={image}
      />

      <Button
        type="submit"
        disabled={isLoading}
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
