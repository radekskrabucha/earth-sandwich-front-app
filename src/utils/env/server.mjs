import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const server = createEnv({
  server: {
    IPFS_GATEWAY: z.string().url(),
    LUKSO_RPC_RPC_URL: z.string().url()
  },
  runtimeEnv: {
    IPFS_GATEWAY: process.env.IPFS_GATEWAY,
    LUKSO_RPC_RPC_URL: process.env.LUKSO_RPC_RPC_URL
  }
})
