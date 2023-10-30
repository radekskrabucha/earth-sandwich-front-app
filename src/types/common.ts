export type WithClassName<T = Record<string, never>> = {
  className?: string
} & T

export type Undefinable<T> = T | undefined
export type Nullable<T> = T | null
export type Nilable<T> = T | undefined | null
