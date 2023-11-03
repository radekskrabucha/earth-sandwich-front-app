import { LSP3ProfileJSON, LSP3Profile } from '@lukso/lsp-factory.js'
import { getProfile } from '@/lib/erc725'

export const getLSP3ProfileData = async (
  address: string
): Promise<LSP3Profile> =>
  ((await getProfile(address, 'LSP3Profile')).value as LSP3ProfileJSON)
    .LSP3Profile
