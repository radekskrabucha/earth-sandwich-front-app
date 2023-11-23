import type { LSP3Profile } from '@lukso/lsp-factory.js'

export type UPProfile = Pick<LSP3Profile, 'name' | 'description'> & {
  backgroundImageUrl?: string
  profileImageUrl?: string
}
