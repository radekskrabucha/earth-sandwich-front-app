export type WithClassName<T = object> = {
  className?: string
} & T

export type Undefinable<T> = T | undefined
export type Nullable<T> = T | null
export type Nilable<T> = T | undefined | null

export type HexString = `0x${string}`
