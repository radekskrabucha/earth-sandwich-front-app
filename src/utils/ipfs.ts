import type { SandwichParticipantMetadata } from '@/models/sandwich'
import type { IpfsImageFile, IpfsJsonFile } from '@/types/ipfs'
import { client } from './env'

export const getIPFSMetadataJSON = (
  metadata: SandwichParticipantMetadata
): string => JSON.stringify(metadata)

export const getIpfsJSONFile = (
  metadata: SandwichParticipantMetadata
): IpfsJsonFile => ({
  file: new Blob([getIPFSMetadataJSON(metadata)], { type: 'application/json' })
})

export const getIpfsImageFile = (image: File): IpfsImageFile => ({
  file: image
})

export const createIpfsLink = (url: string): string =>
  url.replace('ipfs://', client.NEXT_PUBLIC_IPFS_GATEWAY)
