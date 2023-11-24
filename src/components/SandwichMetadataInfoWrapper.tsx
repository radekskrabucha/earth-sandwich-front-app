import { getSandwichMetadata } from '@/features/sandwich/actions'
import type { SandwichMetadata } from '@/models/sandwich'

type UserMetadataInfoWrapperProps = {
  ipfsHash: string
  children(metadata: SandwichMetadata): React.ReactNode
}

export const SandwichMetadataInfoWrapper: React.FC<
  UserMetadataInfoWrapperProps
> = async ({ ipfsHash, children }) => {
  const data = (await getSandwichMetadata(ipfsHash)) as SandwichMetadata

  return <>{children(data)}</>
}
