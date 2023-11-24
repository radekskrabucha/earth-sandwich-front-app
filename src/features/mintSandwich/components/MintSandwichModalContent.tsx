import { Separator } from '@/components/Separator'
import { UserMetadataInfoWrapper } from '@/components/UserMetadataInfoWrapper'
import type { SandwichRaw } from '@/models/sandwich'
import type { HexString } from '@/types/common'
import { MintSandwichForm } from './MintSandwichForm'
import { MintUserTile } from './MintUserTile'

type MintSandwichModalContentProps = {
  sandwich: SandwichRaw
  sandwichId: HexString
}

export const MintSandwichModalContent: React.FC<
  MintSandwichModalContentProps
> = ({ sandwich: { name, participantMetadata }, sandwichId }) => (
  <>
    <div className="flex flex-col gap-6">
      <span className="-mb-6 text-center text-white/50">
        Sandwich participants
      </span>
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
    <span className="text-center text-white/50">
      Add your own photo and description to this sandwich
    </span>
    <MintSandwichForm
      sandwichId={sandwichId}
      participantsMetadataHashes={participantMetadata as Array<HexString>}
      title={name}
    />
  </>
)
