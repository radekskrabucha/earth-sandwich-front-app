import type { SandwichParticipantMetadata } from '@/models/sandwich'
import { getNowUnix } from '@/utils/date'

type GetIPFSMetadataStructureArgs = Omit<
  SandwichParticipantMetadata,
  'timestamp'
>

export const getIPFSMetadataStructure = (
  args: GetIPFSMetadataStructureArgs
): SandwichParticipantMetadata => ({
  ...args,
  timestamp: getNowUnix()
})

export const getIPFSMetadataJSON = (
  metadata: SandwichParticipantMetadata
): string => JSON.stringify(metadata)
