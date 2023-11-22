export const nonNullable = <T>(value: T): value is NonNullable<T> =>
  value != null

export const getIsWindowDefined = () => typeof window !== 'undefined'

export const getIsWindowLocationDefined = () =>
  getIsWindowDefined() && nonNullable(window.location)
