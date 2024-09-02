import { z } from 'zod';

export const TodoSchema = z.object({
  title: z.string().min(2).max(100),
  description: z.string().nullable(),
});

export type TodoType = z.infer<typeof TodoSchema>;

const status = ['PANGING', 'DOING', 'DONE'] as const

const TodoItemSchema = z.object({
  id: z.string(),
  title: z.string(),
  status: z.enum(status), // ステータスをEnumで定義
  description: z.string().optional(),
});

// Todosスキーマ
const TodosSchema = z.object({
  items: z.array(TodoItemSchema),
});

// グラフQLレスポンス全体のスキーマ
export const GraphQLResponseSchema = z.object({
  todos: TodosSchema,
});

// 型を推論する場合
export type TodoItem = z.infer<typeof TodoItemSchema>;
export type Todos = z.infer<typeof TodosSchema>;
export type GraphQLResponse = z.infer<typeof GraphQLResponseSchema>;