import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const client = createEnv({
  client: {
    NEXT_PUBLIC_APP_BASE_URL: z.string().url(),
    NEXT_PUBLIC_IPFS_GATEWAY: z.string().url(),
    NEXT_PUBLIC_LUKSO_RPC_URL: z.string().url(),
    NEXT_PUBLIC_LUKSO_WS_RPC_URL: z.string().url(),
    NEXT_PUBLIC_LUKSO_EXPLORER_URL: z.string().url(),
    NEXT_PUBLIC_EARTH_SANDWICH_CONTRACT_ADDRESS: z.string(),
    NEXT_PUBLIC_PINATA_API_URL: z.string().url(),
    NEXT_PUBLIC_PINATA_API_KEY: z.string()
  },
  runtimeEnv: {
    NEXT_PUBLIC_APP_BASE_URL: process.env.NEXT_PUBLIC_APP_BASE_URL,
    NEXT_PUBLIC_IPFS_GATEWAY: process.env.NEXT_PUBLIC_IPFS_GATEWAY,
    NEXT_PUBLIC_LUKSO_RPC_URL: process.env.NEXT_PUBLIC_LUKSO_RPC_URL,
    NEXT_PUBLIC_LUKSO_WS_RPC_URL: process.env.NEXT_PUBLIC_LUKSO_WS_RPC_URL,
    NEXT_PUBLIC_LUKSO_EXPLORER_URL: process.env.NEXT_PUBLIC_LUKSO_EXPLORER_URL,
    NEXT_PUBLIC_EARTH_SANDWICH_CONTRACT_ADDRESS:
      process.env.NEXT_PUBLIC_EARTH_SANDWICH_CONTRACT_ADDRESS,
    NEXT_PUBLIC_PINATA_API_URL: process.env.NEXT_PUBLIC_PINATA_API_URL,
    NEXT_PUBLIC_PINATA_API_KEY: process.env.NEXT_PUBLIC_PINATA_API_KEY
  }
})
