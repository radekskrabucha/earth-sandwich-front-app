'use client'

import { Button } from '@/components/Button'
import { LoaderCircle } from '@/components/LoaderCircle'
import { useInitiateSandwich } from '../hooks/useInitiateSandwich'

export const CreateSandwichForm = () => {
  const { initiateSandwich, isLoading } = useInitiateSandwich()

  return (
    <section className="layout-section">
      <Button
        onClick={() =>
          initiateSandwich({
            name: 'test',
            participants: []
          })
        }
      >
        {isLoading && <LoaderCircle />}
        Create Sandwich
      </Button>
    </section>
  )
}
