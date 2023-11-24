import {
  uploadIPFSImageReqSchema,
  type UploadIPFSImageReqSchema
} from '@/features/invitations/schemas/request'
import { uploadIPFSImageResSchema } from '@/features/invitations/schemas/response'
import { request } from '@/lib/axios'

type ExtendedReq = UploadIPFSImageReqSchema & {
  description: string
  participantsMetadataHashes: Array<string>
}
export const uploadIPFSImageExtended = (req: ExtendedReq) =>
  request(
    {
      reqSchema: uploadIPFSImageReqSchema,
      resSchema: uploadIPFSImageResSchema
    },
    {
      method: 'post',
      url: '/pinning/pinFileToIPFS',
      req: { file: req.file },
      axiosClient: 'pinata',
      config: {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    }
  )
