import { request } from '@/lib/axios'
import {
  uploadIPFSImageReqSchema,
  uploadIPFSSandwichMetadataReqSchema,
  type UploadIPFSImageReqSchema,
  type UploadIPFSSandwichMetadataReqSchema
} from './validationSchemas/request'
import {
  uploadIPFSImageResSchema,
  uploadIPFSSandwichMetadataResSchema
} from './validationSchemas/response'

export const uploadIPFSImage = (req: UploadIPFSImageReqSchema) =>
  request(
    {
      reqSchema: uploadIPFSImageReqSchema,
      resSchema: uploadIPFSImageResSchema
    },
    {
      method: 'post',
      url: '/pinning/pinFileToIPFS',
      req,
      axiosClient: 'pinata'
    },
    {
      timeout: 2000,
      mockData: 'test-string-response-image-upload-IPFS'
    }
  )
export const uploadIPFSSandwichMetadata = (
  req: UploadIPFSSandwichMetadataReqSchema
) =>
  request(
    {
      reqSchema: uploadIPFSSandwichMetadataReqSchema,
      resSchema: uploadIPFSSandwichMetadataResSchema
    },
    {
      method: 'post',
      url: '/pinning/pinFileToIPFS',
      req,
      axiosClient: 'pinata'
    },
    {
      timeout: 2000,
      mockData: 'test-string-response-sandwich-metadata-upload-IPFS'
    }
  )
