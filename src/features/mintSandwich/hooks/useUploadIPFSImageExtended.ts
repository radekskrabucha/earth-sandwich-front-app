import { useMutation } from '@tanstack/react-query'
import { MutationKey } from '@/lib/reactQuery'
import { getErrorMessage } from '@/utils/error'
import { withIpfsPrefix } from '@/utils/ipfs'
import { uploadIPFSImageExtended } from '../actions'

type UploadIPFSImageArgs = {
  onSuccess?: (
    ipfsHash: string,
    description: string,
    participantsMetadataHashes: Array<string>
  ) => void
}

export const useUploadIPFSImageExtended = ({
  onSuccess
}: UploadIPFSImageArgs) => {
  const { data, error, isPending, variables, mutate } = useMutation({
    mutationKey: [MutationKey.uploadIPFSImageExtended],
    mutationFn: uploadIPFSImageExtended,
    onSuccess: (data, variables) => {
      variables.participantsMetadataHashes
      onSuccess?.(
        withIpfsPrefix(data.IpfsHash),
        variables.description,
        variables.participantsMetadataHashes
      )
    }
  })

  return {
    upload: mutate,
    data,
    variables,
    errorMessage: error ? getErrorMessage({ error }) : undefined,
    isLoading: isPending
  }
}
