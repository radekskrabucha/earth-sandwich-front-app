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
