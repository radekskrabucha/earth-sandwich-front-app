export const isExternalLink = (url: string) =>
  /^(http|https|ftp|mailto|tel):/.test(url)

export const isEvmAddress = (address: string) =>
  /^0x[a-fA-F0-9]{40}$/.test(address)
