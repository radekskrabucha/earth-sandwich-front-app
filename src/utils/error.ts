import { z } from 'zod'

type GetErrorMessageArgs<T extends Error> = {
  error: T
  errorHandler?: (error: T) => string
}

export const getErrorMessage = <T extends Error>({
  error,
  errorHandler
}: GetErrorMessageArgs<T>): string => {
  if (errorHandler) {
    return errorHandler(error)
  }
  if (error instanceof z.ZodError) {
    return error.errors.map(error => error.message).join('\n')
  }
  if (error instanceof Error) {
    return error.message
  }

  return 'Oops! Something went wrong.'
}
