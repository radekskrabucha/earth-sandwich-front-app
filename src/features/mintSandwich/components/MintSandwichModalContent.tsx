import { Separator } from '@/components/Separator'
import { UserMetadataInfoWrapper } from '@/components/UserMetadataInfoWrapper'
import type { SandwichRaw } from '@/models/sandwich'
import { MintUserTile } from './MintUserTile'

export const MintSandwichModalContent: React.FC<SandwichRaw> = ({
  name,
  participantMetadata
}) => (
  <>
    <div className="flex flex-col gap-6">
      <h3 className="line-clamp-1 self-center text-center font-main text-2xl text-primary">
        {name}
      </h3>
      <div className="flex flex-wrap items-center justify-center gap-8">
        {participantMetadata.map(ipfsHash => (
          <UserMetadataInfoWrapper
            key={ipfsHash}
            ipfsHash={ipfsHash}
          >
            {metadata => (
              <MintUserTile
                key={metadata.address}
                {...metadata}
              />
            )}
          </UserMetadataInfoWrapper>
        ))}
      </div>
    </div>
    <Separator />
  </>
)
