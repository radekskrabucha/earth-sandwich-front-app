import { z } from 'zod'

export const mintSandwichFormSchema = z.object({
  description: z.string().min(1, 'Sandwich description is required'),
  image: z.any()
})

export type MintSandwichFormSchema = z.infer<typeof mintSandwichFormSchema>
