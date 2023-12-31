import { useMutation } from '@tanstack/react-query'
import { MutationKey } from '@/lib/reactQuery'
import { getErrorMessage } from '@/utils/error'
import { withIpfsPrefix } from '@/utils/ipfs'
import { uploadIPFSSandwichMetadata } from '../actions'

type UploadIPFSMetadataArgs = {
  onSuccess?: (ipfsHash: string) => void
}

export const useUploadIPFSMetadata = ({
  onSuccess
}: UploadIPFSMetadataArgs) => {
  const { data, error, isPending, variables, mutate } = useMutation({
    mutationKey: [MutationKey.uploadIPFSMetadata],
    mutationFn: uploadIPFSSandwichMetadata,
    onSuccess(data) {
      onSuccess?.(withIpfsPrefix(data.IpfsHash))
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
