import { z } from 'zod'

export const getSandwichMetadataResSchema = z.object({
  location: z.object({
    lat: z.number(),
    long: z.number()
  }),
  timestamp: z.number(),
  address: z.string(),
  imageIPFSHash: z.string().optional()
})

export type GetSandwichMetadataResSchema = z.infer<
  typeof getSandwichMetadataResSchema
>
