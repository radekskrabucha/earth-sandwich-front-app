import { useState } from 'react'
import { useGeolocation } from '@/hooks/useGeolocation'
import type { HexString } from '@/types/common'
import { getIpfsImageFile, getIpfsJSONFile } from '@/utils/ipfs'
import { useAcceptInvitation } from './useAcceptInvitation'
import { useUploadIPFSImage } from './useUploadIPFSImage'
import { useUploadIPFSMetadata } from './useUploadIPFSMetadata'

export const useAcceptInvitationForm = (sandwichId: HexString) => {
  const { error, loading, latitude, longitude, timestamp } = useGeolocation({
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  })

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
      if (latitude && longitude && timestamp) {
        uploadIPFSMetadata(
          getIpfsJSONFile({
            location: {
              lat: latitude,
              long: longitude
            },
            timestamp,
            imageIPFSHash: ipfsHash
          })
        )
      }
    }
  })

  return {
    disabled: Boolean(error) || !latitude || !longitude || !timestamp,
    image,
    setImage,
    onSubmit: () => {
      if (typeof image !== 'string' && image) {
        return uploadIPFSImage(getIpfsImageFile(image))
      }
      if (latitude && longitude && timestamp) {
        return uploadIPFSMetadata(
          getIpfsJSONFile({
            location: {
              lat: latitude,
              long: longitude
            },
            timestamp
          })
        )
      }
    },
    isLoading:
      loading ||
      isUploadIPFSImageLoading ||
      isUploadIPFSMetadataLoading ||
      isAcceptLoading,
    errorMessage:
      (error &&
        `${error.message}. Please allow geolocation service in order to make a sandwich.`) ||
      uploadIPFSImageErrorMessage ||
      uploadIPFSMetadataErrorMessage ||
      acceptErrorMessage,
    data
  }
}
