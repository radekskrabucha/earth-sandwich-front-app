import { z } from 'zod'

export const uploadIPFSImageResSchema = z.string()

export type UploadIPFSImageResSchema = z.infer<typeof uploadIPFSImageResSchema>

export const uploadIPFSSandwichMetadataResSchema = z.string()

export type UploadIPFSSandwichMetadataResSchema = z.infer<
  typeof uploadIPFSSandwichMetadataResSchema
>
