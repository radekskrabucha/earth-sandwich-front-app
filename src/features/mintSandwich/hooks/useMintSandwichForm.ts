import { useAccount } from 'wagmi'
import { useUploadIPFSImage } from '@/features/invitations/hooks/useUploadIPFSImage'
import { useUploadIPFSMetadata } from '@/features/invitations/hooks/useUploadIPFSMetadata'
import { useGeolocation } from '@/hooks/useGeolocation'
import type { HexString } from '@/types/common'
import { getIpfsImageFile, getIpfsJSONFile } from '@/utils/ipfs'
import { useMintSandwich } from './useMintSandwich'

type MintSandwichFormArgs = {
  sandwichId: HexString
}

type OnSubmitArgs = {
  description: string
  image: File | string
}

export const useMintSandwichForm = ({ sandwichId }: MintSandwichFormArgs) => {
  const { address } = useAccount()
  const { error, loading, latitude, longitude, timestamp } = useGeolocation({
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  })

  const {
    data,
    errorMessage: mintErrorMessage,
    isLoading: isMintLoading,
    mintSandwich
  } = useMintSandwich({
    onSuccess: () => {}
  })

  const {
    isLoading: isUploadIPFSMetadataLoading,
    errorMessage: uploadIPFSMetadataErrorMessage,
    upload: uploadIPFSMetadata
  } = useUploadIPFSMetadata({
    onSuccess: metadataIPFSHash => {
      console.log('mint success !!', metadataIPFSHash)
      mintSandwich({
        metadataIPFSHash,
        sandwichId
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
            imageIPFSHash: ipfsHash,
            address: address as HexString
          })
        )
      }
    }
  })

  return {
    data,
    disabled: Boolean(error) || !latitude || !longitude || !timestamp,
    errorMessage:
      (error &&
        `${error.message}. Please allow geolocation service in order to make a sandwich.`) ||
      uploadIPFSImageErrorMessage ||
      uploadIPFSMetadataErrorMessage ||
      mintErrorMessage,
    isLoading:
      loading ||
      isUploadIPFSImageLoading ||
      isUploadIPFSMetadataLoading ||
      isMintLoading,
    onSubmit: ({ image }: OnSubmitArgs) => {
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
            timestamp,
            address: address as HexString
          })
        )
      }
    }
  }
}
