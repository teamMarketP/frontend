import { emailRegex, phoneRegex } from '@/constants/regex';
import { z } from 'zod';

export const loginSchema = z.object({
  emailOrPhone: z
    .string()
    .refine(val => emailRegex.test(val) || phoneRegex.test(val), {
      message: 'Невірний формат email або телефону.',
    }),
  password: z.string().min(12, 'Пароль має містити мінімум 12 символів'),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;
