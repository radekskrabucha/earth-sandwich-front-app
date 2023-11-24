import { request } from '@/lib/axios'
import { createIpfsLink } from '@/utils/ipfs'
import { getSandwichMetadataReqSchema } from './validationSchemas/request'
import {
  getSandwichMetadataResSchema,
  getSandwichUserMetadataResSchema
} from './validationSchemas/response'

export const getSandwichUserMetadata = (ipfsHash: string) =>
  request(
    {
      reqSchema: getSandwichMetadataReqSchema,
      resSchema: getSandwichUserMetadataResSchema
    },
    {
      method: 'get',
      url: createIpfsLink(ipfsHash),
      req: undefined,
      axiosClient: 'basic'
    }
  )
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
