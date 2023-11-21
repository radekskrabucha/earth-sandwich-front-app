import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const client = createEnv({
  client: {
    NEXT_PUBLIC_APP_BASE_URL: z.string().url(),
    NEXT_PUBLIC_LUKSO_RPC_URL: z.string().url(),
    NEXT_PUBLIC_LUKSO_EXPLORER_URL: z.string().url(),
    NEXT_PUBLIC_EARTH_SANDWICH_CONTRACT_ADDRESS: z.string()
  },
  runtimeEnv: {
    NEXT_PUBLIC_APP_BASE_URL: process.env.NEXT_PUBLIC_APP_BASE_URL,
    NEXT_PUBLIC_LUKSO_RPC_URL: process.env.NEXT_PUBLIC_LUKSO_RPC_URL,
    NEXT_PUBLIC_LUKSO_EXPLORER_URL: process.env.NEXT_PUBLIC_LUKSO_EXPLORER_URL,
    NEXT_PUBLIC_EARTH_SANDWICH_CONTRACT_ADDRESS:
      process.env.NEXT_PUBLIC_EARTH_SANDWICH_CONTRACT_ADDRESS
  }
})
