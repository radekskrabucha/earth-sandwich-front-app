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
      axiosClient: 'pinata',
      config: {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
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
      axiosClient: 'pinata',
      config: {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    }
  )
