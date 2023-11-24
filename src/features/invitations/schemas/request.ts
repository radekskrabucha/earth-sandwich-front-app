import { z } from 'zod'

export const uploadIPFSImageReqSchema = z.object({
  file: z.any().refine(file => file instanceof File)
})

export type UploadIPFSImageReqSchema = z.infer<typeof uploadIPFSImageReqSchema>

export const uploadIPFSSandwichMetadataReqSchema = z.object({
  file: z.any().refine(file => file instanceof Blob)
})

export type UploadIPFSSandwichMetadataReqSchema = z.infer<
  typeof uploadIPFSSandwichMetadataReqSchema
>
