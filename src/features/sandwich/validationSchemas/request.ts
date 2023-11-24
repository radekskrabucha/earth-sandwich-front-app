import { z } from 'zod'

export const getSandwichMetadataReqSchema = z.undefined()

export type GetSandwichMetadataReqSchema = z.infer<
  typeof getSandwichMetadataReqSchema
>
