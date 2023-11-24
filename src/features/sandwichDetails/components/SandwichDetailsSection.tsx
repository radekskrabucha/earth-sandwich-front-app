import { UserMetadataInfoWrapper } from '@/components/UserMetadataInfoWrapper'
import { MintUserTile } from '@/features/mintSandwich/components/MintUserTile'
import type { SandwichMetadata } from '@/models/sandwich'

export const SandwichDetailsSection: React.FC<SandwichMetadata> = ({
  title,
  description,
  ownerMetadata,
  participantsMetadataHashes
}) => (
  <section className="layout-section items-center gap-8 text-center">
    <h3 className="font-main text-3xl text-primary">{title}</h3>
    <MintUserTile
      className="h-72 w-72"
      {...ownerMetadata}
    />
    <p className="max-w-md text-white/50">{description}</p>
    <div className="flex flex-wrap items-center justify-center gap-8">
      {participantsMetadataHashes.map(ipfsHash => (
        <UserMetadataInfoWrapper
          key={ipfsHash}
          ipfsHash={ipfsHash}
        >
          {profile => (
            <MintUserTile
              className="h-56 w-56 text-white"
              {...profile}
            />
          )}
        </UserMetadataInfoWrapper>
      ))}
    </div>
  </section>
)
