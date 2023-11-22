import { z } from 'zod'
import { EvmAddressRegex } from '@/utils/regexes'

export const initiateSandwichFormSchema = z.object({
  name: z.string().min(1, 'Sandwich name is required'),
  address: z
    .string()
    .min(1, 'Participant address is required')
    .regex(EvmAddressRegex, 'Invalid address')
})

export type InitiateSandwichFormSchema = z.infer<
  typeof initiateSandwichFormSchema
>
