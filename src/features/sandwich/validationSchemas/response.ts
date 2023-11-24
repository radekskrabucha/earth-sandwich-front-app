import { z } from 'zod'

export const getSandwichUserMetadataResSchema = z.object({
  location: z.object({
    lat: z.number(),
    long: z.number()
  }),
  timestamp: z.number(),
  address: z.string(),
  imageIPFSHash: z.string().optional()
})

export type GetSandwichUserMetadataResSchema = z.infer<
  typeof getSandwichUserMetadataResSchema
>

export const getSandwichMetadataResSchema = z.object({
  title: z.string(),
  description: z.string(),
  ownerMetadata: getSandwichUserMetadataResSchema,
  participantsMetadataHashes: z.array(z.string())
})

export type GetSandwichMetadataResSchema = z.infer<
  typeof getSandwichMetadataResSchema
>
