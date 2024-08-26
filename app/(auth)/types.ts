import { z } from 'zod';

const passwordReg = new RegExp(
  '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[\\W_]).+$',
);

export const userSchema = z.object({
  email: z.string().email().nullable(),
  password: z.string().min(8).regex(passwordReg),
});

export type User = z.infer<typeof userSchema>;
