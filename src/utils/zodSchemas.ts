import { z } from 'zod'

export const searchParamSchema = z.string().array().min(1)
