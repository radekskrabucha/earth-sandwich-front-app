import { ZodType, z } from 'zod'
import { useSearchParams } from 'next/navigation'
import { valuesFromSearchParams } from '@/utils/url'

export const useValidateSearchParams = <T extends ZodType<unknown>>(
  schema: T
) => {
  const rawParams = useSearchParams()
  const rawValues = valuesFromSearchParams(rawParams)

  return {
    rawParams,
    rawValues,
    validateParams: () => schema.parse(rawValues) as z.infer<T>,
    validateParamsAsync: async () =>
      (await schema.parseAsync(rawValues)) as Promise<z.infer<T>>
  }
}
