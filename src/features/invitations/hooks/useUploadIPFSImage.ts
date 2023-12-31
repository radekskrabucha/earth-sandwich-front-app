import { useMutation } from '@tanstack/react-query'
import { MutationKey } from '@/lib/reactQuery'
import { getErrorMessage } from '@/utils/error'
import { withIpfsPrefix } from '@/utils/ipfs'
import { uploadIPFSImage } from '../actions'

type UploadIPFSImageArgs = {
  onSuccess?: (ipfsHash: string) => void
}

export const useUploadIPFSImage = ({ onSuccess }: UploadIPFSImageArgs) => {
  const { data, error, isPending, variables, mutate } = useMutation({
    mutationKey: [MutationKey.uploadIPFSImage],
    mutationFn: uploadIPFSImage,
    onSuccess: data => {
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
