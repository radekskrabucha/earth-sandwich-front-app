import { useState } from 'react'
import type { HexString } from '@/types/common'
import { useAcceptInvitation } from './useAcceptInvitation'

export const useAcceptInvitationForm = (sandwichId: HexString) => {
  const [image, setImage] = useState<File | string>('')

  const {
    data,
    errorMessage: acceptErrorMessage,
    isLoading: isAcceptLoading
  } = useAcceptInvitation()

  return {
    image,
    setImage,
    onSubmit: () => console.log({ image, sandwichId }),
    isLoading: isAcceptLoading,
    errorMessage: acceptErrorMessage,
    data
  }
}
