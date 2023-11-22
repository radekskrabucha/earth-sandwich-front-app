export const isExternalLink = (url: string) =>
  /^(http|https|ftp|mailto|tel):/.test(url)

export const EvmAddressRegex = /^0x[a-fA-F0-9]{40}$/

export const isEvmAddress = (address: string) => EvmAddressRegex.test(address)
