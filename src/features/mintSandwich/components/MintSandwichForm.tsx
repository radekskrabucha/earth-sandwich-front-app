'use client'

import { Field, Form } from 'houseform'
import { AnimatedStatusMessage } from '@/components/AnimatedStatusMessage'
import { Button } from '@/components/Button'
import { ImageInput } from '@/components/ImageInput'
import { LoaderCircle } from '@/components/LoaderCircle'
import { Input } from '@/components/input'
import type { HexString } from '@/types/common'
import { useMintSandwichForm } from '../hooks/useMintSandwichForm'
import {
  mintSandwichFormSchema,
  type MintSandwichFormSchema
} from '../schemas/form'

type MintSandwichFormProps = {
  sandwichId: HexString
  participantsMetadataHashes: Array<HexString>
}

export const MintSandwichForm: React.FC<MintSandwichFormProps> = ({
  sandwichId,
  participantsMetadataHashes
}) => {
  const { isLoading, disabled, errorMessage, onSubmit, data, formRef } =
    useMintSandwichForm({ sandwichId })

  return (
    <Form<MintSandwichFormSchema>
      onSubmit={({ description, image }) => {
        onSubmit({ description, image, participantsMetadataHashes })
      }}
      ref={formRef}
    >
      {({ submit, isValidating }) => (
        <form
          onSubmit={e => {
            e.preventDefault()
            submit()
          }}
          className="flex flex-col gap-8"
        >
          <Field<MintSandwichFormSchema['image']>
            name="image"
            onBlurValidate={mintSandwichFormSchema.shape.image}
          >
            {({ value, setValue, errors }) => (
              <ImageInput
                id="photo"
                name="photo"
                onChangeValue={setValue}
                value={value}
                disabled={isLoading}
                className="self-center"
                errorMessage={errors[0]}
              />
            )}
          </Field>
          <Field<MintSandwichFormSchema['description']>
            name="description"
            onBlurValidate={mintSandwichFormSchema.shape.description}
          >
            {({ value, setValue, onBlur, errors }) => (
              <Input
                value={value}
                onChange={e => setValue(e.target.value)}
                onBlur={onBlur}
                errorMessage={errors}
                disabled={isLoading || isValidating}
                label="Description"
                placeholder="Sandwich description..."
                formNoValidate
                name="description"
                id="description"
              />
            )}
          </Field>

          <Button
            type="submit"
            disabled={isLoading || disabled}
          >
            {isLoading && <LoaderCircle />}
            cook it!
          </Button>
          {errorMessage && (
            <AnimatedStatusMessage variant="error">
              {errorMessage}
            </AnimatedStatusMessage>
          )}
          {data && (
            <AnimatedStatusMessage variant="success">
              Sandwich minted! 🎉
            </AnimatedStatusMessage>
          )}
        </form>
      )}
    </Form>
  )
}
