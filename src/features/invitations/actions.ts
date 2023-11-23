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
      url: '/upload',
      req,
      axiosClient: 'basic'
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
      url: '/upload',
      req,
      axiosClient: 'basic'
    },
    {
      timeout: 2000,
      mockData: 'test-string-response-sandwich-metadata-upload-IPFS'
    }
  )
