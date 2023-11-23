'use client'

import { Field, Form } from 'houseform'
import { AnimatedStatusMessage } from '@/components/AnimatedStatusMessage'
import { Button } from '@/components/Button'
import { LoaderCircle } from '@/components/LoaderCircle'
import { Input } from '@/components/input'
import type { HexString } from '@/types/common'
import { useInitiateSandwich } from '../hooks/useInitiateSandwich'
import {
  initiateSandwichFormSchema,
  type InitiateSandwichFormSchema
} from '../schemas/form'

export const CreateSandwichForm = () => {
  const { initiateSandwich, isLoading, errorMessage, data } =
    useInitiateSandwich()

  return (
    <section className="layout-section max-w-lg rounded-3xl border border-secondary/50 bg-black/10">
      <Form<InitiateSandwichFormSchema>
        onSubmit={({ address, name }) => {
          initiateSandwich({
            name,
            participants: [address as HexString]
          })
        }}
      >
        {({ submit, isValidating }) => (
          <form
            onSubmit={e => {
              e.preventDefault()
              submit()
            }}
            className="flex flex-col gap-8"
          >
            <Field<InitiateSandwichFormSchema['name']>
              name="name"
              onBlurValidate={initiateSandwichFormSchema.shape.name}
            >
              {({ value, setValue, onBlur, errors }) => (
                <Input
                  value={value}
                  onChange={e => setValue(e.target.value)}
                  onBlur={onBlur}
                  errorMessage={errors}
                  disabled={isLoading || isValidating}
                  label="Name"
                  placeholder="Sandwich name..."
                  formNoValidate
                  name="name"
                  id="name"
                />
              )}
            </Field>
            <Field<InitiateSandwichFormSchema['address']>
              name="address"
              onBlurValidate={initiateSandwichFormSchema.shape.address}
            >
              {({ value, setValue, onBlur, errors }) => (
                <Input
                  value={value}
                  onChange={e => setValue(e.target.value)}
                  onBlur={onBlur}
                  errorMessage={errors}
                  disabled={isLoading || isValidating}
                  label="Address"
                  placeholder="0x..."
                  formNoValidate
                  name="address"
                  id="address"
                />
              )}
            </Field>
            <Button
              type="submit"
              disabled={isLoading || isValidating}
            >
              {isLoading && <LoaderCircle />}
              create sandwich
            </Button>
            {errorMessage && (
              <AnimatedStatusMessage variant="error">
                {errorMessage}
              </AnimatedStatusMessage>
            )}
            {data && (
              <AnimatedStatusMessage variant="success">
                Sandwich created! 🥪 Let's get cooking!
              </AnimatedStatusMessage>
            )}
          </form>
        )}
      </Form>
    </section>
  )
}
