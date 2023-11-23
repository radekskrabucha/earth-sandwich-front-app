import { z } from 'zod'

export const acceptInvitationFormSchema = z.object({
  location: z.string().min(1, { message: 'Location is required' })
})

export type AcceptInvitationFormSchema = z.infer<
  typeof acceptInvitationFormSchema
>
