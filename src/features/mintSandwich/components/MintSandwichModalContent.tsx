import { UserMetadataInfoWrapper } from '@/components/UserMetadataInfoWrapper'
import type { SandwichRaw } from '@/models/sandwich'

export const MintSandwichModalContent: React.FC<SandwichRaw> = ({
  name,
  participantMetadata
}) => (
  <div>
    <h3>{name}</h3>
    <pre>{JSON.stringify(participantMetadata, null, 2)}</pre>
    {participantMetadata.map(ipfsHash => (
      <UserMetadataInfoWrapper
        key={ipfsHash}
        ipfsHash={ipfsHash}
      >
        {metadata => (
          <div>
            <pre>{JSON.stringify(metadata, null, 2)}</pre>
          </div>
        )}
      </UserMetadataInfoWrapper>
    ))}
  </div>
)
