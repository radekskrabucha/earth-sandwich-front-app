import { QueryClient } from '@tanstack/react-query'

const FIVE_MINUTES = 1000 * 60 * 5
export const REACT_QUERY_STALE_TIME = FIVE_MINUTES
// REACT_QUERY_STALE_TIME + 5 minutes
export const REACT_QUERY_CACHE_TIME = REACT_QUERY_STALE_TIME + FIVE_MINUTES

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: REACT_QUERY_STALE_TIME,
      gcTime: REACT_QUERY_CACHE_TIME,
      refetchOnWindowFocus: false,
      retry: false
    }
  }
})

export const QueryKey = {
  getUpProfileData: 'getUpProfileData'
} as const

export const MutationKey = {
  uploadIPFSImage: 'uploadIPFSImage',
  uploadIPFSMetadata: 'uploadIPFSMetadata'
} as const
