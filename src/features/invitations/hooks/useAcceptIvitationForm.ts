import { useState } from 'react'
import type { HexString } from '@/types/common'
import { getIpfsImageFile, getIpfsJSONFile } from '@/utils/ipfs'
import { useAcceptInvitation } from './useAcceptInvitation'
import { useUploadIPFSImage } from './useUploadIPFSImage'
import { useUploadIPFSMetadata } from './useUploadIPFSMetadata'

export const useAcceptInvitationForm = (sandwichId: HexString) => {
  const [image, setImage] = useState<File | string>('')

  const {
    data,
    errorMessage: acceptErrorMessage,
    isLoading: isAcceptLoading,
    acceptInvitation
  } = useAcceptInvitation({
    onSuccess: () => {
      setImage('')
    }
  })

  const {
    isLoading: isUploadIPFSMetadataLoading,
    errorMessage: uploadIPFSMetadataErrorMessage,
    upload: uploadIPFSMetadata
  } = useUploadIPFSMetadata({
    onSuccess: metadataIPFSHash => {
      console.log('upload metadata success!!', metadataIPFSHash)
      acceptInvitation({
        sandwichId,
        metadataIPFSHash
      })
    }
  })

  const {
    isLoading: isUploadIPFSImageLoading,
    errorMessage: uploadIPFSImageErrorMessage,
    upload: uploadIPFSImage
  } = useUploadIPFSImage({
    onSuccess: ipfsHash => {
      console.log('upload image success!!', ipfsHash)
      uploadIPFSMetadata(
        getIpfsJSONFile({
          location: {
            lat: 0,
            long: 0
          },
          timestamp: Date.now(),
          imageIPFSHash: ipfsHash
        })
      )
    }
  })

  return {
    image,
    setImage,
    onSubmit: () => {
      // TODO: get location
      if (typeof image !== 'string' && image) {
        return uploadIPFSImage(getIpfsImageFile(image))
      }

      return uploadIPFSMetadata(
        getIpfsJSONFile({
          location: {
            lat: 0,
            long: 0
          },
          timestamp: Date.now()
        })
      )
    },
    isLoading:
      isUploadIPFSImageLoading ||
      isUploadIPFSMetadataLoading ||
      isAcceptLoading,
    errorMessage:
      uploadIPFSImageErrorMessage ||
      uploadIPFSMetadataErrorMessage ||
      acceptErrorMessage,
    data
  }
}
