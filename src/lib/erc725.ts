import ERC725, { ERC725JSONSchema } from '@erc725/erc725.js'
import { GetDataDynamicKey } from '@erc725/erc725.js/build/main/src/types/GetData'
import lsp3ProfileSchema from '@erc725/erc725.js/schemas/LSP3ProfileMetadata.json'
import { server } from '@/utils/env'

const config = {
  ipfsGateway: server.IPFS_GATEWAY
}
const provider = server.LUKSO_RPC_RPC_URL

export const getErc725Instance = (address: string) => {
  const erc725 = new ERC725(
    lsp3ProfileSchema as Array<ERC725JSONSchema>,
    address,
    provider,
    config
  )

  return erc725
}

export const getProfile = async (
  address: string,
  key?: string | GetDataDynamicKey
) => {
  const erc725js = getErc725Instance(address)

  return await erc725js.fetchData(key)
}
