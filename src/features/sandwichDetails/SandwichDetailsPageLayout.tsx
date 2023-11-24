import { SandwichIpfsMetadataWrapper } from '@/components/SandwichIpfsMetadataWrapper'
import { SandwichMetadataInfoWrapper } from '@/components/SandwichMetadataInfoWrapper'
import { SandwichInfoWrapper } from '@/features/sandwich/components/SandwichInfoWrapper'
import { PendingSandwichDetails } from './components/PendingSandwichDetails'
import { SandwichDetailsSection } from './components/SandwichDetailsSection'
import type { SandwichDetailsPageProps } from './types'

export const SandwichDetailsPageLayout: React.FC<
  React.PropsWithChildren<SandwichDetailsPageProps>
> = async ({ params: { id }, children }) => (
  <>
    <SandwichInfoWrapper address={id}>
      {sandwich =>
        sandwich.isFinalized ? (
          <SandwichIpfsMetadataWrapper sandwichId={id}>
            {ipfsHash => (
              <SandwichMetadataInfoWrapper ipfsHash={ipfsHash}>
                {sandwichMetadata => (
                  <SandwichDetailsSection {...sandwichMetadata} />
                )}
              </SandwichMetadataInfoWrapper>
            )}
          </SandwichIpfsMetadataWrapper>
        ) : (
          <PendingSandwichDetails
            {...sandwich}
            sandwichId={id}
          />
        )
      }
    </SandwichInfoWrapper>
    {children}
  </>
)
