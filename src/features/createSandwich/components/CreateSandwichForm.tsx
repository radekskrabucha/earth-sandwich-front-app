'use client'

import { Field, Form } from 'houseform'
import { AnimatedStatusMessage } from '@/components/AnimatedStatusMessage'
import { Button } from '@/components/Button'
import { LoaderCircle } from '@/components/LoaderCircle'
import { Separator } from '@/components/Separator'
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
    <section className="layout-section">
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
            className="flex w-full max-w-lg flex-col gap-8 self-center  rounded-3xl border border-primary/10 bg-background p-8 shadow-2xl"
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
            <Separator className="-mb-2" />
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
