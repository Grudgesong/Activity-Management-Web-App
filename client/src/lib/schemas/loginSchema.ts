import z from "zod";

export const loginSchema = z.object({
  email: z.email({error: 'Email is required'}),
  password: z.string({error: 'Password is required'}). min(6),
})

export type LoginSchema = z.infer<typeof loginSchema>;