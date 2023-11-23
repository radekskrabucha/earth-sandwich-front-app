'use client'

import { Field, Form } from 'houseform'
import { AnimatedStatusMessage } from '@/components/AnimatedStatusMessage'
import { Button } from '@/components/Button'
import { LoaderCircle } from '@/components/LoaderCircle'
import { Input } from '@/components/input'
import type { HexString } from '@/types/common'
import { useAcceptInvitation } from '../hooks/useAcceptInvitation'
import {
  acceptInvitationFormSchema,
  type AcceptInvitationFormSchema
} from '../schemas/form'

type AcceptInvitationFormProps = {
  sandwichId: HexString
}

export const AcceptInvitationForm: React.FC<AcceptInvitationFormProps> = ({
  sandwichId
}) => {
  const { acceptInvitation, data, errorMessage, isLoading } =
    useAcceptInvitation()

  return (
    <Form<AcceptInvitationFormSchema>
      onSubmit={data => {
        acceptInvitation({
          id: sandwichId,
          metadataIPFSHash: ''
        })
        console.log(data)
      }}
    >
      {({ submit, isValidating }) => (
        <form
          onSubmit={e => {
            e.preventDefault()
            submit()
          }}
          className="flex flex-col gap-6"
        >
          <Field<AcceptInvitationFormSchema['location']>
            name="location"
            onBlurValidate={acceptInvitationFormSchema.shape.location}
          >
            {({ value, setValue, onBlur, errors }) => (
              <Input
                value={value}
                onChange={e => setValue(e.target.value)}
                onBlur={onBlur}
                errorMessage={errors}
                disabled={isLoading || isValidating}
                label="Location"
                placeholder="Sandwich location..."
                formNoValidate
                name="location"
                id="location"
              />
            )}
          </Field>

          <Button
            type="submit"
            disabled={isLoading || isValidating}
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
      )}
    </Form>
  )
}
