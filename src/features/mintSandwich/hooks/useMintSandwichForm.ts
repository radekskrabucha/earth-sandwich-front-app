import type { FormInstance } from 'houseform'
import { useAccount } from 'wagmi'
import { useRef } from 'react'
import { useUploadIPFSMetadata } from '@/features/invitations/hooks/useUploadIPFSMetadata'
import { useGeolocation } from '@/hooks/useGeolocation'
import type { SandwichMetadata } from '@/models/sandwich'
import type { HexString } from '@/types/common'
import { getIpfsImageFile, getIpfsJSONFile } from '@/utils/ipfs'
import type { MintSandwichFormSchema } from '../schemas/form'
import { useMintSandwich } from './useMintSandwich'
import { useUploadIPFSImageExtended } from './useUploadIPFSImageExtended'

type MintSandwichFormArgs = {
  sandwichId: HexString
  title: string
}

type OnSubmitArgs = {
  description: string
  image: File | string
  participantsMetadataHashes: Array<string>
}

export const useMintSandwichForm = ({
  sandwichId,
  title
}: MintSandwichFormArgs) => {
  const formRef = useRef<FormInstance<MintSandwichFormSchema>>(null)
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
    onSuccess: () => {
      formRef.current?.reset()
    }
  })

  const {
    isLoading: isUploadIPFSMetadataLoading,
    errorMessage: uploadIPFSMetadataErrorMessage,
    upload: uploadIPFSMetadata
  } = useUploadIPFSMetadata({
    onSuccess: metadataIPFSHash => {
      mintSandwich({
        metadataIPFSHash,
        sandwichId,
        address: address as HexString
      })
    }
  })

  const {
    isLoading: isUploadIPFSImageLoading,
    errorMessage: uploadIPFSImageErrorMessage,
    upload: uploadIPFSImage
  } = useUploadIPFSImageExtended({
    onSuccess: (imageIPFSHash, description, participantsMetadataHashes) => {
      if (latitude && longitude && timestamp) {
        uploadIPFSMetadata(
          getIpfsJSONFile<SandwichMetadata>({
            title,
            description,
            ownerMetadata: {
              location: {
                lat: latitude,
                long: longitude
              },
              timestamp,
              address: address as HexString,
              imageIPFSHash
            },
            participantsMetadataHashes
          })
        )
      }
    }
  })

  return {
    formRef,
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
    onSubmit: ({
      image,
      description,
      participantsMetadataHashes
    }: OnSubmitArgs) => {
      if (typeof image !== 'string' && image) {
        return uploadIPFSImage({
          ...getIpfsImageFile(image),
          description,
          participantsMetadataHashes
        })
      }
      if (latitude && longitude && timestamp) {
        return uploadIPFSMetadata(
          getIpfsJSONFile<SandwichMetadata>({
            title,
            description,
            ownerMetadata: {
              location: {
                lat: latitude,
                long: longitude
              },
              timestamp,
              address: address as HexString
            },
            participantsMetadataHashes
          })
        )
      }
    }
  }
}
