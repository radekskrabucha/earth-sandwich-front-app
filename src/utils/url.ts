export const withHttpsProtocol = (path: string) => `https://${path}`

export const valuesFromSearchParams = (searchParams: URLSearchParams) =>
  Array.from(searchParams.keys()).reduce(
    (values, key) => {
      const value = searchParams.getAll(key)

      if (value.length === 1 && value[0] === '') {
        return values
      }

      return {
        ...values,
        [key]: value
      }
    },
    {} as Record<string, Array<string>>
  )
