import { request } from '@/lib/axios'
import { createIpfsLink } from '@/utils/ipfs'
import { getSandwichMetadataReqSchema } from './validationSchemas/request'
import { getSandwichMetadataResSchema } from './validationSchemas/response'

export const getSandwichMetadata = (ipfsHash: string) =>
  request(
    {
      reqSchema: getSandwichMetadataReqSchema,
      resSchema: getSandwichMetadataResSchema
    },
    {
      method: 'get',
      url: createIpfsLink(ipfsHash),
      req: undefined,
      axiosClient: 'basic'
    }
  )
