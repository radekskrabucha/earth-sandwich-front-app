import type { IpfsImageFile, IpfsJsonFile } from '@/types/ipfs'
import { client } from './env'

export const getIPFSMetadataJSON = <T>(metadata: T): string =>
  JSON.stringify(metadata)

export const getIpfsJSONFile = <T>(metadata: T): IpfsJsonFile => ({
  file: new Blob([getIPFSMetadataJSON(metadata)], { type: 'application/json' })
})

export const getIpfsImageFile = (image: File): IpfsImageFile => ({
  file: image
})

export const createIpfsLink = (url: string): string =>
  url.replace('ipfs://', client.NEXT_PUBLIC_IPFS_GATEWAY)

export const withIpfsPrefix = (hash: string): string => `ipfs://${hash}`
