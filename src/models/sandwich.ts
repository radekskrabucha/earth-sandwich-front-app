import type { HexString } from '@/types/common'

export type SandwichRaw = {
  name: string
  owner: HexString
  isFinalized: boolean
  participantAddresses: ReadonlyArray<HexString>
  participantMetadata: ReadonlyArray<string>
}

export type SandwichParticipant = {
  hasAccepted: boolean
  metadata: string
}

export type Location = {
  lat: number
  long: number
}

export type SandwichParticipantMetadata = {
  location: Location
  timestamp: number
  address: HexString
  imageIPFSHash?: string
}

export type SandwichMetadata = {
  description: string
  ownerMetadata: SandwichParticipantMetadata
  participantsMetadataHashes: ReadonlyArray<string>
}
