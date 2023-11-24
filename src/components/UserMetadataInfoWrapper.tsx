import { getSandwichMetadata } from '@/features/sandwich/actions'
import type { SandwichParticipantMetadata } from '@/models/sandwich'

type UserMetadataInfoWrapperProps = {
  ipfsHash: string
  children(metadata: SandwichParticipantMetadata): React.ReactNode
}

export const UserMetadataInfoWrapper: React.FC<
  UserMetadataInfoWrapperProps
> = async ({ ipfsHash, children }) => {
  const data = (await getSandwichMetadata(
    ipfsHash
  )) as SandwichParticipantMetadata

  return <>{children(data)}</>
}
