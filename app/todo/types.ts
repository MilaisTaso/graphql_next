import { z } from 'zod'

export const Todo = z.object({
  title: z.string().min(2).max(100),
  description: z.string().nullable()
})

export type TodoType = z.infer<typeof Todo>