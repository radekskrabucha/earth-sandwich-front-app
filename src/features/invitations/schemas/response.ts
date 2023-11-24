import { z } from 'zod'

export const uploadIPFSImageResSchema = z.object({
  IpfsHash: z.string()
})

export type UploadIPFSImageResSchema = z.infer<typeof uploadIPFSImageResSchema>

export const uploadIPFSSandwichMetadataResSchema = z.object({
  IpfsHash: z.string()
})

export type UploadIPFSSandwichMetadataResSchema = z.infer<
  typeof uploadIPFSSandwichMetadataResSchema
>
